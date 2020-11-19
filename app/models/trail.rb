# == Schema Information
#
# Table name: trails
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  difficulty     :string           not null
#  summary        :text             not null
#  description    :text             not null
#  length         :float            not null
#  elevation_gain :integer          not null
#  route_type     :string           not null
#  usage          :string
#  park_id        :integer          not null
#  lat            :float            not null
#  lng            :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Trail < ApplicationRecord
    validates :name, :difficulty, :summary, :description, :length, presence: true
    validates :elevation_gain, :route_type, :park_id, :lat, :lng, presence: true

    validates :difficulty, inclusion: { in: ["easy", "moderate", "strenuous"] }
    validates :route_type, inclusion: { in: ["Out & Back", "Loop", "Point-to-Point"] }
    validates :usage, inclusion: { in: ["light", "moderate", "heavy"] }

    belongs_to :park,
        foreign_key: :park_id,
        class_name: "Park"

    has_many :reviews,
        foreign_key: :trail_id,
        class_name: "Review"

    has_many :taggables, as: :taggable
    has_many :tags,
        through: :taggables,
        source: :tag

    has_many_attached :photos
    has_one_attached :coverPhoto
end

    # has_many :reviews,
    #     foreign_key: :review_id,
    #     class_name: "Review"   
        
    # has_many :photos,
    #     foreign_key: ,
    #     class_name: ""