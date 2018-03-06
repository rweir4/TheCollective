class AddColumnsToUserTable < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :img_url, :string, null: true
  end
end
