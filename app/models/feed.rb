class Feed < ApplicationRecord
  validates :url, :title, presence: true, uniqueness: true
  validates :description, presence: true

  has_many :subscriptions
  has_many :taggings
  has_many :sports, through: :taggings
end
