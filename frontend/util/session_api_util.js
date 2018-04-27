export const signup = (user) => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  })
);

export const login = (user) => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  })
);

export const demoLogin = () => {
  return $.ajax({
    url: 'api/demoLogin',
    method: 'GET'
  });
};

export const logout = (id) => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
);
