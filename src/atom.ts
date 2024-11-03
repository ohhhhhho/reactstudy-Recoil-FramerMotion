import { atom } from 'recoil';

interface ITimeData {
  time: number | null;
  isActive: boolean;
  round: number;
  goal: number;
}
export const TimeData = atom<ITimeData>({
  key: 'timeData',
  default: {
    time: null,
    isActive: false,
    round: 0,
    goal: 0,
  },
});
