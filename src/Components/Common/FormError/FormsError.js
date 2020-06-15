import React from 'react';
import style from './FormsError.module.css';

export const Input = ({ input, meta, ...props }) => {

  const hasError = meta.touched && meta.error;

  return (
    <div className={style.form + " " + (hasError ? style.error: undefined)}>
      <input {...input}  {...props} />
      {hasError && <span className={style.someError}>{meta.error}</span>}
    </div>
  )
}
