/* eslint-disable react/prop-types */
import '../styles/Editor.css';
import { useState } from 'react';

function Input({ label, type, id, handleOnChange }) {
  return (
    <label htmlFor={id}>
      {label}:
      <input id={id} type={type} onChange={handleOnChange} />
    </label>
  );
}

function Editor() {
  const [isHeaderSubmitted, setIsHeaderSubmitted] = useState(false);
  const [headerInput, setHeaderInput] = useState({
    name: '',
    bdate: '',
    phone: '',
    profession: '',
    address: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    setIsHeaderSubmitted(true);
  }

  function handleOnChange(event) {
    const { id, value } = event.target;
    setHeaderInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  return (
    <div className='Editor'>
      {!isHeaderSubmitted ? (
        <header>
          <Input label='Name' type='text' id='name' handleOnChange={handleOnChange} />
          <button type='button' onClick={handleSubmit}>
            Submit
          </button>
        </header>
      ) : (
        <header>
          <p>{headerInput.name}</p>
        </header>
      )}
    </div>
  );
}

export default Editor;
