class ChangeSportsColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :sports, :image, :string
  end
end
