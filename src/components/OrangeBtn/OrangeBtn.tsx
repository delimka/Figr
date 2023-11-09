import React, { ReactNode, MouseEventHandler } from 'react';
import './OrangeBtn.scss';

interface OrangeBtnProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const OrangeBtn: React.FC<OrangeBtnProps> = ({ onClick, children }) => {
  return (
    <button className="orange-btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default OrangeBtn;
