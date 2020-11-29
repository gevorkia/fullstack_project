class RemoveIndexForReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, [:user_id, :trail_id, :activity_date]
  end
end
