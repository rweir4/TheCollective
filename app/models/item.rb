class Item < ApplicationRecord
  validates :description, :img_url, :collection_id, presence: true

  belongs_to :collection
end
