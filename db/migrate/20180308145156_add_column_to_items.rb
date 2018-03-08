class AddColumnToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :img_url, :string, null: false
  end
end
