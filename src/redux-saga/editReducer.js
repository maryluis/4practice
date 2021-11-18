import { ON_EDIT, SAVE_EDIT } from './actions';

const defaultEditState = {
  isEdit: false,
  data: {
    name: '',
    costumerName: 'Барановская Е.В.',
    type: '',
    costumer: '',
    done: false,
    status: 'Waiting',
  },
};
function editTableReducer(state, action) {
  if (state === undefined) {
    return defaultEditState;
  } if (action.type === ON_EDIT) {
    return { ...state, isEdit: true };
  } if (action.type === SAVE_EDIT) {
    return state;
  }
  return state;
}

export default editTableReducer;
