class Collection < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :subscriptions, dependent: :destroy
  has_many :feeds, through: :subscriptions
end
