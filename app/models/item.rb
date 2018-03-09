class Item < ApplicationRecord
  validates :description, :collection_id, presence: true

  has_attached_file :image, default_url: "baby-groot-fan-art-4k.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :collection
end
