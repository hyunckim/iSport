class CreateFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :feeds do |t|
      t.string :url, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :image, null: false

      t.timestamps
    end
    add_index :feeds, :description
  end
end
