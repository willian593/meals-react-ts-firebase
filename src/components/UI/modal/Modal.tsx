import ReactDOM from 'react-dom';
import { Backdrop } from './Backdrop';
import { ModalOverlay } from './ModalOverlay';

type Props = {
  // children: JSX.Element | JSX.Element[] ;
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: Props) => {
  const modalRoot = document.getElementById('overlays') as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, modalRoot)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        modalRoot
      )}
    </>
  );
};
