/* eslint-disable react/prop-types */
import { useState } from 'react';
import { format, isValid, parseISO } from 'date-fns';
import Input from './Input';

function CheckInput({ label, id, checked, handleCheck }) {
  return (
    <label htmlFor={id}>
      {label}:
      <input id={id} type='checkbox' checked={checked} onChange={handleCheck} />
    </label>
  );
}

function Education() {
  const [isEduSubmitted, setIsEduSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEduSubmitted === null) {
      setIsEduSubmitted(true);
    } else {
      setIsEduSubmitted(!isEduSubmitted);
    }
  };

  const [eduInput, setEduInput] = useState([
    {
      program: '',
      uni: '',
      location: '',
      start: null,
      end: null,
    },
  ]);
  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setEduInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const [eduCheck, setEduCheck] = useState(false);
  const handleCheck = (event) => {
    setEduCheck(event.target.checked);
  };

  function formatDate(string) {
    if (string == null || string === '') return '';
    const date = parseISO(string);
    return isValid(date) ? format(date, 'dd-MM-yy') : '';
  }

  return !isEduSubmitted ? (
    <section className='forms'>
      <Input
        label='Program'
        type='text'
        id='program'
        value={eduInput.program}
        handleOnChange={handleOnChange}
      />
      <Input
        label='University'
        type='text'
        id='uni'
        value={eduInput.uni}
        handleOnChange={handleOnChange}
      />
      <Input
        label='City'
        type='text'
        id='location'
        value={eduInput.location}
        handleOnChange={handleOnChange}
      />
      <Input
        label='Enrolled in'
        type='date'
        id='start'
        value={eduInput.start}
        handleOnChange={handleOnChange}
      />
      {!eduCheck && (
        <Input
          label='Graduated in'
          type='date'
          id='end'
          value={eduInput.end}
          handleOnChange={handleOnChange}
        />
      )}
      <CheckInput label='On going' id='ongoing' checked={eduCheck} handleCheck={handleCheck} />
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
          From {formatDate(eduInput.start)} to {eduCheck ? 'Present' : formatDate(eduInput.end)}
        </p>
        <div>
          <p>{eduInput.location}</p>
          <button type='button' onClick={handleSubmit}>
            Edit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Education;
