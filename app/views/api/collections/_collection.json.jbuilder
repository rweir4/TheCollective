json.id col.id
json.title col.title
json.author_id col.author_id
json.item_ids col.items.pluck(:id)
