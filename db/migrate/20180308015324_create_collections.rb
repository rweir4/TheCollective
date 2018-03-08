class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.string :title, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :collections, [:title, :author_id], unique: true
    add_index :collections, :title
    add_index :collections, :author_id
  end
end
