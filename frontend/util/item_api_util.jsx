import * as ItemActions from '../actions/item_actions';

export const fetchItems = () => (
  $.ajax({
    url: `api/items`,
    method: 'GET'
  })
);

export const fetchItem = (id) => {
  return $.ajax({
    url: `api/items/${id}`,
    method: 'GET'
  });
};

export const createItem = (formData) => {
  return $.ajax({
    url: `api/items`,
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
    success: function(item) {
      ItemActions.receiveItem(item);
    }
  });
};

export const updateItem = (formData) => {

  return $.ajax({
    url: `api/items/${formData.get('item[itemId]')}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: formData,
    success: function(item) {
      ItemActions.receiveItem(item);
    }
  });
};

export const deleteItem = (id) => (
  $.ajax({
    url: `api/items/${id}`,
    method: 'DELETE'
  })
);
