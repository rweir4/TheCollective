json.partial! "api/collections/collection", col: @collection

json.items do
  @collection.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :description, :img_url
    end
  end
end
