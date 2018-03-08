json.partial! 'api/users/user', user: @user

json.collections do
  @user.collection.each do |item|
    json.set! collection.id do
      json.extract! item, :id, :title
    end
  end
end
