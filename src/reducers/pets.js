import pets from '../../data/pets';

const initialState = pets

export default (state = initialState, action) => { 
  switch(action.type) {

    case 'ADD_PET':
      return state.concat(action.pet)

    // case 'REMOVE_PET':
    //   return [
    //     ...state.slice(0, action.index),
    //     ...state.slice(index + 1)
    //   ]

    // case 'EDIT_PET':
    //   const pet = state.filter(p => p.name == action.name)[0]
    //   const editedPet = Object.assign({}, pet, { name: action.newName })
    //   return [
    //     ...state.slice(0, action.index),
    //     editedPet,
    //     ...state.slice(index + 1)
    //   ]

    default: 
      return state;
  }
}