export const fetchCollections = () => (
  $.ajax({
    url: `api/collections`,
    method: 'GET'
  })
);

export const fetchCollection = (id) => (
  $.ajax({
    url: `api/collections/${id}`,
    method: 'GET'
  })
);

export const createCollection = (collection) => (
  $.ajax({
    url: `api/collections`,
    method: 'GET',
    data: { collection }
  })
);

export const updateCollection = (collection) => (
  $.ajax({
    url: `api/collections/${collection.id}/edit`,
    method: 'GET',
    data: { collection }
  })
);

export const deleteCollection = (id) => (
  $.ajax({
    url: `api/collections/${id}`,
    method: 'DELETE'
  })
);
