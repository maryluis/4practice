import values from 'lodash/values';

export const URL_LOGIN = 'https://tablelogin-daaba-default-rtdb.europe-west1.firebasedatabase.app/.json';
export const URL_ORDERS = 'https://tableorders-8409f-default-rtdb.firebaseio.com/.json';

const makeEditUrl = (id) => `https://tableorders-8409f-default-rtdb.firebaseio.com/${id}/.json`;

export async function applyLogin() {
  let response = await fetch(URL_LOGIN);
  response = await response.json();
  return values(response);
}

export async function putLogin() {
  const response = await fetch(URL_LOGIN, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ isAdmin: false, name: 'loki', password: '123123' }),
  });
  await response.json();
}

export async function putOrder(data) {
  const positionsArray = data.positions.filter((item) => item.length > 0);
  const newData = { ...data, positions: [...positionsArray] };
  const response = await fetch(URL_ORDERS, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(newData),
  });
  await response.json();
}

export async function getOrders() {
  let response = await fetch(URL_ORDERS);
  response = await response.json();
  const newArr = [];
  for (const key in response) {
    newArr.push({ gID: key, ...response[key] });
  }
  return newArr;
}

export async function editOrder(data) {
  await fetch(makeEditUrl(data.gID), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
