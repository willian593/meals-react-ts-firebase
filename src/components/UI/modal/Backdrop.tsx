import classes from './Modal.module.css';

type Props = {
  onClose: () => void;
};

export const Backdrop = ({ onClose }: Props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
    </>
  );
};
