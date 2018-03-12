import * as ItemActions from '../actions/item_actions';

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
    data: formData,
    success: function(item) {
      ItemActions.receiveItem(item);
    }
  })
);

export const updateItem = (formData) => (
  $.ajax({
    url: `api/items/${formData.itemId}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: formData,
    success: function(item) {
      ItemActions.receiveItem(item);
    }
  })
);

export const deleteItem = (id) => (
  $.ajax({
    url: `api/items/${id}`,
    method: 'DELETE'
  })
);
