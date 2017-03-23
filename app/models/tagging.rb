class Tagging < ApplicationRecord
  validates :sport, :feed, presence: true
  validates :sport, uniqueness: { scope: :feed }

  belongs_to :sport
  belongs_to :feed
end
