/* eslint-disable react/prop-types */
import '../styles/Editor.css';
import useState from 'react';

function Title({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
}

function BioInputs() {
  return (
    <div className='bioInputs'>
      <input name='name' type='text' className='short' />
      <input name='birth' type='date' className='short' />
      {
        // all the other inputs needed
      }
    </div>
  );
}

function Editor() {
  return (
    <div className='editor'>
      <Title title='Create your own CV!' subtitle='with live preview' />
      <BioInputs />
    </div>
  );
}

export default Editor;

/*

Da mettere al parent instead

function ShortInput() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return <input type='text' value='inputValue' className='short' onChange={handleChange} />;
}

*/
