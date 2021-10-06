import React from 'react';
import Style from './Button.module.css';

function Button(props) {
   const {label, cssClass, type} = props;
   return (
      <>
         <button type={type} className={`${Style.btnStyle} ${cssClass}`}>{label}</button>
      </>
   )
}

export default Button
