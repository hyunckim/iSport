class Collection < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :subscription, dependent: :destroy
end
