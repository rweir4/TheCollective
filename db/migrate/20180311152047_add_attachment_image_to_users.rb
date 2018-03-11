class AddAttachmentImageToUsers < ActiveRecord::Migration[5.1]
  def self.up
    remove_column :users, :imageg
    change_table :users do |t|
      t.string :image
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :users, :image
  end
end
