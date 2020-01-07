import React, { useState } from 'react';

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
        placeholder="first name"
      />
      <br />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
        placeholder="last name"
      />
      <h2>Your first name: {name.firstName}</h2>
      <br />
      <h2>Your last name: {name.lastName}</h2>
      <br />
      <button
        onClick={e => {
          e.preventDefault();
          alert(`seu nome: é ${name.firstName} ${name.lastName}`);
        }}
      >
        Ola mundo
      </button>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default HookCounterThree;
