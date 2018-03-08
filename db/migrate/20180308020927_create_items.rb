class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.text :description
      t.integer :collection_id, null: false

      t.timestamps
    end
    add_index :items, :description
    add_index :items, :collection_id
  end
end
