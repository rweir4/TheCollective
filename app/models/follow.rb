class Follow < ApplicationRecord

  belongs_to :followee,
    class_name: :User

  belongs_to :follower,
    class_name: :User

  validates :follower, uniqueness: { scope: :followee }
end
