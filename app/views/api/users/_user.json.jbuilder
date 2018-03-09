json.extract! user, :id, :email, :img_url
json.collections do
  user.collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :title
    end
  end
end
