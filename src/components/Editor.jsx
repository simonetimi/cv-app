/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import '../styles/Editor.css';
import '../styles/Experience.css';
import { useState } from 'react';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';

function Editor() {
  const [eduCount, setEduCount] = useState(0);
  const eduComponents = [];
  for (let i = 0; i < eduCount; i += 1) {
    eduComponents.push(<Education key={i} />);
  }
  const handleEduClick = () => {
    setEduCount(eduCount + 1);
  };

  const [expCount, setExpCount] = useState(0);
  const expComponents = [];
  for (let i = 0; i < expCount; i += 1) {
    expComponents.push(<Experience key={i} />);
  }
  const handleExpClick = () => {
    setExpCount(expCount + 1);
  };

  return (
    <div className='Editor'>
      <Header />
      <button type='button' onClick={handleEduClick}>
        Add Education Section
      </button>
      {eduComponents}
      <button type='button' onClick={handleExpClick}>
        Add Experience Section
      </button>
      {expComponents}
    </div>
  );
}

export default Editor;
