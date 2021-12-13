import { InputInterface } from '../../data/data';
import React, { ChangeEvent } from 'react';
import classes from './Input.module.css';

type Props = {
  label: string;
  input: InputInterface;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type Ref = HTMLInputElement;

export const Input = React.forwardRef<Ref, Props>(
  ({ input, onchange, label }: Props, ref) => {
    return (
      <>
        <div className={classes.input}>
          <label htmlFor={input.id}>{label}</label>
          <input ref={ref} {...input} onChange={onchange} />
        </div>
      </>
    );
  }
);
