//export const BASE_URL = '//localhost:8080'
export const BASE_URL = '//v-chemodane-api.onrender.com'



/*export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
        return Promise.reject(res.status);
      //return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
};*/

export const checkResponse = async (res) => {
  const data = await res.json(); // читаем тело ответа
  if (res.ok) {
    return data; // если всё ок — возвращаем данные
  } else {
    // если ошибка — отклоняем с объектом данных (где msg)
    return Promise.reject(data);
  }
};

export const register = ({username, email, password, subscribed, phone} ) => {
  return fetch(`${BASE_URL}/users/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      subscribed: subscribed,
      phone: phone,
      })
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getAllUsers = () => {
    return fetch(`${BASE_URL}/users/all`, {
      credentials: 'include',
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(checkResponse);
  };