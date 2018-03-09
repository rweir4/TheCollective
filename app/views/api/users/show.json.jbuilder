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
