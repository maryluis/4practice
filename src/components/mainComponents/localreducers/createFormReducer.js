export const CHANGE_FORM = 'CHANGE_FORM';
export const ADD_POSITION = 'ADD_POSITION';
export const CHANGE_POSITION = 'CHANGE_POSITION';
export const CLEAR_FORM = 'CLEAR_FORM';

export const defaultState = {
  email: '',
  name: '',
  surname: '',
  number: '',
  positions: [''],
  costumer: 'Поставщик 1',
  type: 'Розница',
  date: '',
  comment: '',
};

export const actionChangeForm = (payload) => ({
  type: CHANGE_FORM,
  payload,
});

export const actionAddPosition = () => ({
  type: ADD_POSITION,
});

export const actionChangePosition = ({ index, value }) => ({
  type: CHANGE_POSITION,
  payload: { index, value },
});
export const actionFormClear = () => ({
  type: CLEAR_FORM,
});

export function createFormReducer(state, action) {
  if (state === undefined) {
    return defaultState;
  }
  if (action.type === CHANGE_FORM) {
    return { ...state, ...action.payload };
  }
  if (action.type === ADD_POSITION) {
    return { ...state, positions: [...state.positions, ''] };
  }
  if (action.type === CHANGE_POSITION) {
    const newPositions = [...state.positions];
    newPositions[action.payload.index] = action.payload.value;
    return { ...state, positions: [...newPositions] };
  }
  if (action.type === CLEAR_FORM) {
    return defaultState;
  }
  return state;
}
