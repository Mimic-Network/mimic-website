import * as React from "react";

export interface IWaitlistProviderProps {
  children: React.ReactNode;
}
const defaultValue ={
  isOpen: false,
  open: () => {},
  close: () => {},
}
interface IWaitlistContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
export const WaitlistContext = React.createContext<IWaitlistContext>(defaultValue);
const WaitlistProvider: React.FC<IWaitlistProviderProps> = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <WaitlistContext.Provider value={{ isOpen, open, close }}>
      {props.children}
    </WaitlistContext.Provider>
  )
};
export default WaitlistProvider;
