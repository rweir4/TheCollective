export const fetchQuery = (query) => {
  return $.ajax({
    url: 'api/search/:query',
    method: 'GET'
  });
};
