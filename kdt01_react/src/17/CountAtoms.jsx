//프롭스 드릴링 너무 많을 때, 전역 변수로 빼서 컴포넌트 모두가 함께 공유할 때 사용.

import { atom } from "jotai";

export const cntAtom = atom(0);
export const contAtom2 = atom((get) => get(cntAtom)*2);
