import React from 'react';
import style from './myInput.module.css'

// using forwardRef we loose control on the companent
const MyInput = React.forwardRef((props, ref) => {
  return (
  <div>
    <input ref={ref} className={style.myInput} {...props}/>
  </div>
  )
});

export default MyInput;
