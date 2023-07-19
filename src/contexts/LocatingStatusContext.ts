import { createContext, type SetStateAction, type Dispatch } from "react";

interface LocatingStatusContextValue {
  isLocating: boolean;
  setIsLocating: Dispatch<SetStateAction<boolean>>;
}

export const LocatingStatusContext = createContext<LocatingStatusContextValue>({
  isLocating: false,
  setIsLocating: () => false,
});
