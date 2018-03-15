class Item < ApplicationRecord
  validates :description, :image, :collection, :author, presence: true

  has_attached_file :image, default_url: "baby-groot-fan-art-4k.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :collection
  has_one :author,
    through: :collection,
    source: :author
end
