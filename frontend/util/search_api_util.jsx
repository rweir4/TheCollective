export const fetchQuery = (query) => {
  return $.ajax({
    url: 'api/searches',
    method: 'GET',
    data: { query }
  });
};
