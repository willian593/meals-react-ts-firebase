import classes from './Modal.module.css';

type Props = {
  children: React.ReactNode;
};

export const ModalOverlay = ({ children }: Props) => {
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};
