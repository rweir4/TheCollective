json.id col.id
json.title col.title
json.author_id col.author_id
json.description col.description
json.item_ids col.items.pluck(:id)
json.created_at col.created_at
