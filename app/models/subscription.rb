class Subscription < ApplicationRecord

  validates :collection, :feed, presence: true;
  validates :collection, uniqueness: { scope: :feed }

  belongs_to :collection
  belongs_to :feed
end
