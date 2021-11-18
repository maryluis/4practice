export const ON_EDIT = 'ON_EDIT';
export const SAVE_EDIT = 'SAVE_EDIT';
export const CHANGE_TABLE = 'CHANGE_TABLE';

export const defaultEditState = {
  isEdit: true,
  data: {
    name: '',
    costumerName: 'Барановская Е.В.',
    type: '',
    costumer: '',
    done: false,
    status: 'Waiting',
  },
};

export const actionOnEdit = (payload) => ({
  type: ON_EDIT,
  payload,
});

export function editTableReducer(state, action) {
  debugger;
  if (state === undefined) {
    return defaultEditState;
  } if (action.type === ON_EDIT) {
    return { data: { ...action.payload }, isEdit: false };
  } if (action.type === SAVE_EDIT) {
    return state;
  } if (action.type === CHANGE_TABLE) {
    return { ...state, data: { ...state.data, ...action.payload } };
  }
  return state;
}
