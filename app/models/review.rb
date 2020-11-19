# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  activity_date :date             not null
#  rating        :integer          not null
#  review        :text             not null
#  activity      :string           not null
#  user_id       :integer          not null
#  trail_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :activity_date, :rating, :review, :activity, presence: true
    validates :user_id, :trail_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"

end
