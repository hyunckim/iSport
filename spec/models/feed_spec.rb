require 'rails_helper'

RSpec.describe Feed, type: :model do
  let!(:feed) { Feed.create!(url: 'feed.rss', title: 'sample',
    description: 'test') }


  describe 'validations' do
    it { should validate_presence_of(:url) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
    it { should validate_uniqueness_of(:url) }
    it { should validate_uniqueness_of(:title) }
  end

  describe 'associations' do
    it { should have_many(:subscriptions) }
    it { should have_many(:taggings) }
    it { should have_many(:sports) }
  end
end
