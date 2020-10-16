class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :type, null: false 
      t.text :summary, null: false 
      t.text :description, null: false 
      t.string :location, null: false 
      t.integer :acreage, null: false 
      t.string :contact, null: false 
      t.string :website, null: false 
      t.float :lat, null: false 
      t.float :lng, null: false 

      t.timestamps
    end
  end
end
