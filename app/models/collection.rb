class Collection < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :User
  
end
