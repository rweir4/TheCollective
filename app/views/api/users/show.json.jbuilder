json.user do
  json.partial! 'api/users/user', user: @user
end

json.collections do
  @user.collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :title
    end
  end
end

json.items do
  @user.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :description, :image
    end
  end
end
