json.collection do
  json.partial! "api/collections/collection", col: @collection
end

json.items do
  @collection.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :description, :image
    end
  end
end
