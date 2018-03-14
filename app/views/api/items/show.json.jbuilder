json.item do
  json.partial! 'api/items/item', item: @item
  json.collection @item.collection
  json.author @item.author
end
