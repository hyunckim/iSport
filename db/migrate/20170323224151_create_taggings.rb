class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :feed_id, null: false
      t.integer :sport_id, null: false

      t.timestamps
    end
    add_index :taggings, :feed_id
    add_index :taggings, :sport_id
  end
end
