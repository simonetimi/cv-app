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

function Experience() {
  const [isExpSubmitted, setIsExpSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isExpSubmitted === null) {
      setIsExpSubmitted(true);
    } else {
      setIsExpSubmitted(!isExpSubmitted);
    }
  };

  const [expInput, setExpInput] = useState([
    {
      position: '',
      company: '',
      location: '',
      start: null,
      end: null,
    },
  ]);
  const handleOnChange = (event) => {
    const { id, value } = event.target;
    setExpInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const [expCheck, setExpCheck] = useState(false);
  const handleCheck = (event) => {
    setExpCheck(event.target.checked);
  };

  function formatDate(string) {
    if (string == null || string === '') return '';
    const date = parseISO(string);
    return isValid(date) ? format(date, 'dd-MM-yy') : '';
  }

  return !isExpSubmitted ? (
    <section className='forms'>
      <Input
        label='Position'
        type='text'
        id='position'
        value={expInput.position}
        handleOnChange={handleOnChange}
      />
      <Input
        label='Company'
        type='text'
        id='company'
        value={expInput.company}
        handleOnChange={handleOnChange}
      />
      <Input
        label='City'
        type='text'
        id='location'
        value={expInput.location}
        handleOnChange={handleOnChange}
      />
      <Input
        label='Start date'
        type='date'
        id='start'
        value={expInput.start}
        handleOnChange={handleOnChange}
      />
      {!expCheck && (
        <Input
          label='End date'
          type='date'
          id='end'
          value={expInput.end}
          handleOnChange={handleOnChange}
        />
      )}
      <CheckInput label='On going' id='ongoing' checked={expCheck} handleCheck={handleCheck} />
      <button type='button' onClick={handleSubmit}>
        Submit
      </button>
    </section>
  ) : (
    <section className='display'>
      <div>
        <p>{expInput.position}</p>
        <p>{expInput.company}</p>
      </div>
      <div>
        <p>
          From {formatDate(expInput.start)} to {expCheck ? 'Present' : formatDate(expInput.end)}
        </p>
        <div>
          <p>{expInput.location}</p>
          <button type='button' onClick={handleSubmit}>
            Edit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
