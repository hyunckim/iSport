class Feed < ApplicationRecord
  validates :url, :title, presence: true, uniqueness: true
  validates :description, presence: true


end
