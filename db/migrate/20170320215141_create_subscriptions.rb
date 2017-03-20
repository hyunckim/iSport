class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.integer :feed_id, null: false
      t.integer :collection_id, null: false

      t.timestamps
    end
    add_index :subscriptions, :feed_id
    add_index :subscriptions, :collection_id
  end
end
