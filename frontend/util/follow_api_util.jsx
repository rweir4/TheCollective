export const createFollow = (id) => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: GET,
    data: { follower }
  });
};
