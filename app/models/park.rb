# == Schema Information
#
# Table name: parks
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  summary     :text             not null
#  description :text             not null
#  location    :string           not null
#  acreage     :integer          not null
#  contact     :string           not null
#  website     :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Park < ApplicationRecord
    validates :name, :summary, :description, :location, presence: true
    validates :acreage, :contact, :website, :lat, :lng, presence: true

    has_many :trails,
        foreign_key: :park_id,
        class_name: "Trail"

    has_many :tags, as: :taggable

    has_one_attached :photo
end
