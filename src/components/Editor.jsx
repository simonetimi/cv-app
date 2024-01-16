/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import '../styles/Editor.css';
import '../styles/Experience.css';
import { useState } from 'react';
import Header from './Header';
import Education from './Education';

function Editor() {
  const [eduCount, setEduCount] = useState(0);
  const eduComponents = [];
  for (let i = 0; i < eduCount; i += 1) {
    eduComponents.push(<Education key={i} />);
  }
  const handleEduClick = () => {
    setEduCount(eduCount + 1);
  };

  return (
    <div className='Editor'>
      <Header />
      <button type='button' onClick={handleEduClick}>
        Add Education Section
      </button>
      {eduComponents}
    </div>
  );
}

export default Editor;
