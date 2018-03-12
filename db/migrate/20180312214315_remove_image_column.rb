class RemoveImageColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :image
    remove_column :users, :image
  end
end
