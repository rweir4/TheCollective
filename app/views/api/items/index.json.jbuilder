@follows.each do |follow|
  follow.items.each do |item|
    json.set! item.id do
      json.partial! "api/items/item", item: item
    end
  end
end
