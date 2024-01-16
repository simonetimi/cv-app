/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import '../styles/Editor.css';
import '../styles/Experience.css';

import Header from './Header';
import Education from './Education';

function Editor() {
  return (
    <div className='Editor'>
      <Header />
      <Education />
    </div>
  );
}

export default Editor;
