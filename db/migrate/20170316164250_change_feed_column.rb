class ChangeFeedColumn < ActiveRecord::Migration[5.0]
  def change
    change_column :feeds, :image, :string, null: true
  end
end
