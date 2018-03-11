class ChangeUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :img_url
    add_column :users, :image, :string
  end
end
