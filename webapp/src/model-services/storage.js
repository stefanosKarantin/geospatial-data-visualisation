const TOKEN = 'token';
const USER = 'user';
const REFRESH_TOKEN = 'refreshToken';
// Token
const updateToken = (token) => {
  sessionStorage.setItem(TOKEN, token);
};

const resetToken = () => {
  sessionStorage.removeItem(TOKEN);
};

const getToken = () => {
  return sessionStorage.getItem(TOKEN);
};

// Refresh Token
const updateRefreshToken = (token) => {
  sessionStorage.setItem(REFRESH_TOKEN, token);
};

const resetRefreshToken = () => {
  sessionStorage.removeItem(REFRESH_TOKEN);
};

const getRefreshToken = () => {
  return sessionStorage.getItem(REFRESH_TOKEN);
};

// User
const updateUser = (user) => {
  sessionStorage.setItem(USER, JSON.stringify(user));
};

const resetUser = () => {
  sessionStorage.removeItem(USER);
};

const getUser = () => {
  const user = sessionStorage.getItem(USER);

  return JSON.parse(user);
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
    // Ignore write errors.
  }
};

const resetState = () => {
  try {
    localStorage.removeItem('state');
  } catch (err) {
    console.log(err);
    // Ignore write errors.
  }
};

export {
  updateToken,
  resetToken,
  getToken,

  updateRefreshToken,
  resetRefreshToken,
  getRefreshToken,

  updateUser,
  resetUser,
  getUser,

  loadState,
  saveState,
  resetState,
};
