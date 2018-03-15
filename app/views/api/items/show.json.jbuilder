json.item do
  json.partial! 'api/items/item', item: @item
end

json.user do
  json.partial! 'api/users/user', user: @item.author
end

json.collection do
  json.partial! 'api/collections/collection', col: @item.collection
end
