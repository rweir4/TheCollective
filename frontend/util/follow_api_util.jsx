export const createFollow = id => {
  return $.ajax({
    url: `api/users/${id}/follow`,
    method: 'POST'
  });
};

export const deleteFollow = id => {
  return $.ajax({
    url: `api/users/${id}/follow`,
    method: 'DELETE'
  });
};
