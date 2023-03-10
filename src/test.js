/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Inpuut from './Inpuut';
import List from './List';
import './test.css';

const Test = () => {
  const [notes, setNotes] = useState([]);
  const [activeClass, setActiveClass] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const getItems = JSON.parse(localStorage.getItem('notes'))

  useEffect(() => {
    setNotes(getItems)
  }, [])
  
  console.log(notes)
  const onHandleClick = () => {
    const newNotes = {
      id: uuidv4(),
      title,
      text,
      date: Date.now(),
    };
    setNotes([newNotes, ...notes]);
    setText('');
    setTitle('');
  };
  function sortFunc() {
    const sorted = [...notes].sort((a, b) => (a.title.length > b.title.length ? 1 : -1));
    setNotes(sorted);
  }

  const onHandleDelete = (ids) => {
    setNotes(notes.filter((note) => note.id !== ids));
  };

  return (
    <div className="test">
    <Inpuut
        text={text}
        title={title}
        setText={setText}
        setTitle={setTitle}
        onHandleClick={onHandleClick}
    />
    <List
        notes={notes}
        onHandleDelete={onHandleDelete}
        activeClass={activeClass}
        setActiveClass={setActiveClass}
        sortFunc={sortFunc}
    />
    </div>

  );
};

export default Test;
