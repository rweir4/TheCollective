class ChangeItems < ActiveRecord::Migration[5.1]
  def change
    remove_column :items, :image
    add_column :items, :image, :string
  end
end
