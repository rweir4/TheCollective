export const fetchItems = () => (
  $.ajax({
    url: `api/items`,
    method: 'GET'
  })
);

export const fetchItem = (id) => (
  $.ajax({
    url: `api/items/${id}`,
    method: 'GET'
  })
);

export const createItem = (item) => (
  $.ajax({
    url: `api/items`,
    method: 'GET',
    data: { item }
  })
);

export const updateItem = (item) => (
  $.ajax({
    url: `api/items/${item.id}/edit`,
    method: 'GET',
    data: { item }
  })
);

export const deleteItem = (id) => (
  $.ajax({
    url: `api/items/${id}`,
    method: 'DELETE'
  })
);
