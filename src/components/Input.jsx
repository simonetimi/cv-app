/* eslint-disable react/prop-types */

function Input({ label, type, id, handleOnChange }) {
  return (
    <label htmlFor={id}>
      {label}:
      <input id={id} type={type} onChange={handleOnChange} />
    </label>
  );
}

export default Input;
