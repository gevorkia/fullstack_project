# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  activity_date :date             not null
#  rating        :integer          not null
#  review        :text             not null
#  user_id       :integer          not null
#  trail_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :activity_date, :rating, :review, presence: true
    validates :activity_date, uniqueness: { scope: [:trail_id, :user_id], message: "- only one review allowed for this trail on this date"}

    belongs_to :reviewer,
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :trail,
        foreign_key: :trail_id,
        class_name: "Trail"

    has_many :taggables, as: :taggable

    has_many :tags,
        through: :taggables,
        source: :tag
end
