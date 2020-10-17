class DeleteParkColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :parks, :type
  end
end
