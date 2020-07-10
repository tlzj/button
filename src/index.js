import React from 'react';
import './index.css';

const Button = props => {
  const { onClick, className='', children='这里是打包后的按钮' } = props;
  const clickBtn = (e) => {
    onClick && onClick(e)
  }
  return (
    <div className={`tl-diy-btn ${className}`} onClick={clickBtn}>{children}</div>
  )
}
export default Button;