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

export const createItem = (formData) => (
  $.ajax({
    url: `api/items`,
    method: 'POST',
    contentType: false,
    processData: false,
    data: { formData }
  })
);

export const updateItem = (formData) => (
  $.ajax({
    url: `api/items/${item.id}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: { formData }
  })
);

export const deleteItem = (id) => (
  $.ajax({
    url: `api/items/${id}`,
    method: 'DELETE'
  })
);
