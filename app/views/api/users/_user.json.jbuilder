json.id user.id
json.email user.email
json.image asset_path(user.image.url)
json.collection_ids user.collections.pluck(:id)
json.item_ids user.items.pluck(:id)
json.follows user.followers.pluck(:id)
json.followers user.followees.pluck(:id)
