require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:markov) { User.create!(email: 'breakfast', password: 'password') }

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
  end

  describe 'associations' do
    # association tests go here
  end
end
