/* eslint-disable max-len */
import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import './test.css';

const List = ({
  notes, onHandleDelete, activeClass, setActiveClass,
}) => (
        <div className="list">
            <h1 className='title'>Interview questions</h1>
            {/* <button onClick={sortFunc}>Sort</button> */}
            <div className='blocks'>
            {notes.map((note) => (
            <div onClick={() => setActiveClass(note.id)} key={note.id} className={`listItems ${note.id === activeClass && 'active'}`}>
                <h1 className='list-title'>{note.title}</h1>
                <div className='list-text'>{note.text}</div>
                <span className='date'>{new Date(note.date).toLocaleDateString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}</span>
                <button className="deleteButton" onClick={() => onHandleDelete(note.id)}><AiTwotoneDelete/></button>
           </div>
            ))}
            </div>
        </div>
);

export default List;
