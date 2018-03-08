class Collection < ApplicationRecord
  validates :title, :author_id, presence: true

  has_many :items
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

end
