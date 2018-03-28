json.user do
  json.partial! 'api/users/user', user: @user
end

json.collections do
  @user.collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :title, :item_ids
    end
  end
end

json.items do
  @user.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :description, :image
      json.author_id item.author.id
    end
  end
end
