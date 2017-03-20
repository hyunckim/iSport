class Subscription < ApplicationRecord

  validates :collection, :feed, presence: true;

  belongs_to :collection
  belongs_to :feed
end
