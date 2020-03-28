

import React from 'react';


const Modal = props => {
  return (
  // <div className={styles.modal}>
    <div>
      <div>
        <header >
          <span className="title">{props.title}</span>
          <button className="close" onClick={props.close}>X</button>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Modal;
