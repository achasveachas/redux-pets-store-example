import React from 'react';
import { connect } from 'react-redux';
import { addPet } from '../actions/pets';

const PetForm = (props) => {
  let input;

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!input.value.trim()) {
      return
    }
    props.addPet(input.value)
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Pet
        </button>
      </form>
    </div>
  )
}

export default connect(null, { addPet })(PetForm)
