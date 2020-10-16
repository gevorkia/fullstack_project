# == Schema Information
#
# Table name: parks
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  type        :string           not null
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
    validates :name, :type, :summary, :description, :location, presence: true
    validates :acreage, :contact, :website, :lat, :lang, presence: true

    has_many :trails,
        foreign_key: :park_id,
        class_name: "Trail"
end
