# json.array! @items, partial: 'api/items/item', as: :item
@items.each do |item|
  json.set! item.id do
    json.partial! "api/items/item", item: item
  end
end
