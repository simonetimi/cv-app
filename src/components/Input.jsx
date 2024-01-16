/* eslint-disable react/prop-types */

function Input({ label, type, id, value = '', handleOnChange }) {
  return (
    <label htmlFor={id}>
      {label}:
      <input id={id} type={type} onChange={handleOnChange} value={value} />
    </label>
  );
}

export default Input;
