class ChangeColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :email, :email
  end
end