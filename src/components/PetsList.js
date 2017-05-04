import React from 'react';
import { connect } from 'react-redux';

const PetsList = ({ pets }) => {
  const renderPets = pets.map((pet, index) =>
    <div key={index}>
      <h1>{pet.name}</h1>
    </div>
  )
  return (
    <div>
      {renderPets}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pets: state.pets
  }
}

export default connect(mapStateToProps)(PetsList)