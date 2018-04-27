import * as UserActions from '../actions/user_actions';

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

export const updateUser = (formData) => {
  return $.ajax({
    url: `api/users/${formData.get('user[userId]')}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: formData,
    success: function(user) {
      UserActions.receiveUser(user);
    }
  });
};

export const deleteUser = (id) => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'DELETE'
  })
);
