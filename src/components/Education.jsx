/* eslint-disable react/prop-types */
import { useState } from 'react';
import Input from './Input';

function CheckInput({ label, id, handleCheck }) {
  return (
    <label htmlFor={id}>
      {label}:
      <input id={id} type='checkbox' onChange={handleCheck} />
    </label>
  );
}

function Education() {
  const [isEduSubmitted, setIsEduSubmitted] = useState(false);
  const [eduInput, setEduInput] = useState([
    {
      program: '',
      uni: '',
      location: '',
      start: '',
      end: '',
    },
  ]);
  const [eduCheck, setEduCheck] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsEduSubmitted(true);
  }

  const handleCheck = (event) => {
    setEduCheck(event.target.checked);
  };

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setEduInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return !isEduSubmitted ? (
    <section className='forms'>
      <Input label='Program' type='text' id='program' handleOnChange={handleOnChange} />
      <Input label='University' type='text' id='uni' handleOnChange={handleOnChange} />
      <Input label='City' type='text' id='location' handleOnChange={handleOnChange} />
      <Input label='Enrolled in' type='date' id='start' handleOnChange={handleOnChange} />
      {!eduCheck && (
        <Input label='Graduated in' type='date' id='end' handleOnChange={handleOnChange} />
      )}
      <CheckInput label='On going' id='ongoing' handleCheck={handleCheck} />
      <button type='button' onClick={handleSubmit}>
        Submit
      </button>
    </section>
  ) : (
    <section className='display'>
      <div>
        <p>{eduInput.program}</p>
        <p>{eduInput.uni}</p>
      </div>
      <div>
        <p>
          {eduInput.start} - {eduCheck ? 'Present' : eduInput.end}
        </p>
        <p>{eduInput.location}</p>
      </div>
    </section>
  );
}

export default Education;
