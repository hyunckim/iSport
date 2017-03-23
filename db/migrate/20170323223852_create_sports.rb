class CreateSports < ActiveRecord::Migration[5.0]
  def change
    create_table :sports do |t|
      t.string :title, null: false

      t.timestamps
    end
    add_index :sports, :title
  end
end
