# json.array! @collections, partial: 'api/collections/collection', as: :col

@collections.each do |col|
  json.set! col.id do
    json.partial! "api/collections/collection", col: col
  end
end
