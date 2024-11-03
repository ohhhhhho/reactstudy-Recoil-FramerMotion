import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
export const GlobalStyle = createGlobalStyle`
* {
  font-family: "Rubik Wet Paint", system-ui;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;

export const Wraper = styled.div`
  background-color:tomato;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const H1 = styled(motion.h1)`
  color:#fff;
  font-size:100px;
  margin-top:40px;
`;

export const TimeBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
  position: relative;
  margin-top: 100px;
  ::after{
    content:':';
    font-size:30px;
    color: #dc492e;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
`;

export const TimeBox = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  width:200px;
  height:300px;
  background: #fff;
  border-radius: 15px;
  font-size: 80px;
  letter-spacing: 10px;
  color:tomato;
  box-shadow: 0px 0px 20px 3px #be321a;
}
`;

export const TimeDot = styled.span`
  font-size: 40px;
  color: #dc492e;
`;

export const PlayButton = styled(motion.button)`
  background-color: #c33a3a;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  margin-top: 80px;
  svg{
    color:#fff;
  }
`;
export const ScoreWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 350px;
  margin-top: 80px;
  color: #fff;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  font-size: 24px;
`;

export const ResetButton = styled.button`
  width: 450px;
  margin: 90px auto 150px;
  background: #000;
  border: none;
  padding: 20px 0;
  color: #fff;
  font-size: 26px;
`;
