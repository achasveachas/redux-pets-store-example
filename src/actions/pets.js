export const addPet = (name) => {
  return {
    type: 'ADD_PET',
    pet: {
      name
    }
  }
}
