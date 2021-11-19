export const ON_EDIT = 'ON_EDIT';
export const SAVE_EDIT = 'SAVE_EDIT';
export const CHANGE_TABLE = 'CHANGE_TABLE';

export const defaultEditState = {
  isEdit: true,
  data: {
    costumerName: '',
    type: '',
    costumer: '',
    done: false,
    status: 'Waiting',
    fullName: '',
  },
};

export const actionOnEdit = (payload) => ({
  type: ON_EDIT,
  payload,
});

export const actionSaveEdit = () => ({
  type: SAVE_EDIT,
});

export const actionChangeTableRow = (payload) => ({
  type: CHANGE_TABLE,
  payload,
});

export function editTableReducer(state, action) {
  if (state === undefined) {
    return defaultEditState;
  } if (action.type === ON_EDIT) {
    return {
      data: {
        ...state.data,
        ...action.payload,
      },
      isEdit: false,
    };
  } if (action.type === SAVE_EDIT) {
    return defaultEditState;
  } if (action.type === CHANGE_TABLE) {
    return { ...state, data: { ...state.data, ...action.payload } };
  }
  return state;
}
