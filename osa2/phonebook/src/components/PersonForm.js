import React from 'react'

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          <p>name:</p>
          <input type="text" onChange={props.handlePersonNameChange} />
          <br></br>
          <p>number:</p>
          <input type="text" onChange={props.handlePersonNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm