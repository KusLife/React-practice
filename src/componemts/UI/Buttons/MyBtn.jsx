import React from 'react';
import style from './myBtn.module.css'

const MyBtn = ({children, ...props}) => {
  return (
    <div>
      <button {...props} className={style.myBtn}>{children}</button>
    </div>
  );
};

export default MyBtn;
