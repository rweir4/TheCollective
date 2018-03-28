export const createFollow = id => {
  return $.ajax({
    url: `api/users/${id}/follows`,
    method: 'POST'
  });
};

export const deleteFollow = (id, user_id) => {
  debugger
  return $.ajax({
    url: `api/users/${id}/follows/${user_id}`,
    method: 'DELETE'
  });
};
