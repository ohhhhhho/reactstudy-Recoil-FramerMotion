import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { TimeData } from './atom';
import {
  H1,
  Wraper,
  TimeBox,
  TimeBoxWrap,
  PlayButton,
  ScoreWrap,
  Score,
  ResetButton,
} from './style';

const Timer = () => {
  const initialTime: number = 12;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [{ time, isActive, round, goal }, setTimer] = useRecoilState(TimeData);
  //초기화
  const resetTimer = () => {
    //clearInterval의 매개변수에는 null이 없다.(그래서 if문 빼면 오류남)
    //clearInterval값이 null일 수 있기에 null이 아닐때만 실행하도록 if문 사용
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer((pre) => ({
      ...pre,
      time: initialTime,
      isActive: false,
      round: 0,
      goal: 0,
    }));
  };
  //버튼(재생, 일시정지)
  const toggleTimer = () => {
    setTimer((pre) => ({ ...pre, isActive: !pre.isActive }));
  };

  useEffect(() => {
    if (time === null) {
      setTimer((pre) => ({ ...pre, time: initialTime, isActive: false }));
      return; // time이 null일 경우 초기화
    }
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((pre) => ({
          ...pre,
          time: pre.time ? pre.time - 1 : 0,
        }));
      }, 1000);
    } else if (time === 0) {
      setTimer((pre) => ({
        ...pre,
        time: initialTime,
        isActive: false,
        round: (pre.round + 1) % 4,
        goal: pre.goal + Math.floor((pre.round + 1) / 4),
      }));
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, time]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      <>
        <TimeBox>{`${minutes < 10 ? '0' + minutes : minutes}`}</TimeBox>
        {seconds <= 10 && isActive ? (
          <TimeBox
            initial={{ scale: 0.7 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {`${seconds < 10 ? '0' + seconds : seconds}`}
          </TimeBox>
        ) : (
          <TimeBox>{`${seconds < 10 ? '0' + seconds : seconds}`}</TimeBox>
        )}
      </>
    );
  };

  return (
    <>
      <Wraper>
        <H1
          initial={{ y: 130 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pomodoro
        </H1>
        <TimeBoxWrap>{formatTime(time ?? 0)}</TimeBoxWrap>
        <PlayButton onClick={toggleTimer} whileHover={{ scale: 1.2 }}>
          {isActive ? (
            <svg
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="50"
              height="50"
            >
              <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"></path>
            </svg>
          ) : (
            <svg
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="50"
              height="50"
            >
              <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
            </svg>
          )}
        </PlayButton>
        <ScoreWrap>
          <Score>
            <span>{round} / 4</span>Round
          </Score>
          <Score>
            <span>{goal} / 12</span>Goal
          </Score>
        </ScoreWrap>

        <ResetButton onClick={resetTimer}>Reset</ResetButton>
      </Wraper>
    </>
  );
};

export default Timer;
