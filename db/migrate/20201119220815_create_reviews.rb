class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.date :activity_date, null: false
      t.integer :rating, null: false 
      t.text :review, null: false 
      t.string :activity, null: false 
      t.integer :user_id, null: false 
      t.integer :trail_id, null: false 

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :trail_id
    add_index :reviews, [:user_id, :trail_id, :activity_date], unique: true
  end
end
