export const fetchUsers = () => (
  $.ajax({
    url: `api/users`,
    method: 'GET'
  })
);

export const fetchUser = (id) => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'GET'
  })
);

export const createUser = (user) => (
  $.ajax({
    url: `api/users`,
    method: 'GET',
    data: { user }
  })
);

export const updateUser = (user) => (
  $.ajax({
    url: `api/users/${user.id}/edit`,
    method: 'GET',
    data: { user }
  })
);

export const deleteUser = (id) => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'DELETE'
  })
);
