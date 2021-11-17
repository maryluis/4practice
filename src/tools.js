import values from 'lodash/values';

export const URL_LOGIN = 'https://tablelogin-daaba-default-rtdb.europe-west1.firebasedatabase.app/.json';

export const data = '';

export async function applyLogin() {
  let response = await fetch(URL_LOGIN);
  response = await response.json();
  return values(response);
}
