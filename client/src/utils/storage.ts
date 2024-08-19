const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`survey-token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`survey-token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`survey-token`);
  },
};

export default storage;