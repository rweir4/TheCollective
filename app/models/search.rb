class Search < ApplicationRecord
  def filter(query)
    info = {
      items: Item.all.description,
      collections: Collection.all.title,
      users: User.all.email
    }

    results = {}
    info.each do |k, v|
      slice = v.take(query.length)
      if slice === query
        results[k] += v
      end
    end

    results
  end
end
