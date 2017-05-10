require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { User.create!(email: 'breakfast', password: 'password') }

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do
    it { should have_many(:collections) }
    it { should have_many(:feeds) }
  end

  describe 'model_methods' do
    describe '.find_by_credentials' do
      context 'when given correct credentials' do
        it 'should find the right user' do
          correct_user = User.find_by_credentials('breakfast', 'password')
          expect(correct_user).to eq(user)
        end
      end

      context 'when given incorrect credentials' do
        it 'should return nil' do
          incorrect_user = User.find_by_credentials('breakfast', 'pass')
          expect(incorrect_user).not_to eq(user)
        end
      end
    end
  end
end
