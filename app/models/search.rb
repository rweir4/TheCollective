class Search < ApplicationRecord
  def self.filter(query)
    info = {
      items: Item.all.inject([]) {|all_descriptions, item| all_descriptions << { result: item.description, id: item.id } },
      collections: Collection.all.inject([]) {|all_titles, coll| all_titles << { result: coll.title, id: coll.id } },
      users: User.all.inject([]) {|all_emails, user| all_emails << { result: user.email, id: user.id } }
    }

    results = {
      items: [],
      collections: [],
      users: []
    }
    query_size = query.length

    info.each do |k, v|
      v.each do |detail|
        slice = detail[:result].chars.take(query_size)
        if slice.join("").downcase == query.downcase
          if results[k]
            results[k] << detail
          end
        end
      end
    end
    
    results
  end
end
