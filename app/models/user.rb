class User < ApplicationRecord
  validates :email, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  has_attached_file :image, default_url: "profile-me.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :follows
  has_many :followers

  has_many :collections,
    class_name: :Collection,
    foreign_key: :author_id

  has_many :items,
    through: :collections,
    source: :items

  attr_reader :password
  # attr_accessor :image_file_name

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && BCrypt::Password.new(user.password_digest).is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
