/* eslint-disable max-len */
import React from 'react';

import './test.css';

function Inpuut({
  onHandleClick, text, title, setText, setTitle,
}) {
  return (
        <div className="inpuut">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='input'
              autoFocus
              placeholder='Question...'
            />
            <textarea placeholder='Answer...' wrap='off' cols='40' rows='4' value={text} onChange={(e) => setText(e.target.value)} className='textarea'/>
           <div>
           <button className="addButton" onClick={onHandleClick}>Add</button>
           </div>
    </div>
  );
}

export default Inpuut;
