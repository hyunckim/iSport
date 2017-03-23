class Sport < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :taggings
  has_many :feeds, through: :taggings
end
