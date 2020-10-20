# == Schema Information
#
# Table name: taggables
#
#  id            :bigint           not null, primary key
#  tag_id        :integer          not null
#  taggable_id   :integer          not null
#  taggable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Taggable < ApplicationRecord

    belongs_to :taggable,
        polymorphic: true
        # foreign_key: :taggable_id,
        # class_name: "Taggable",

    belongs_to :tag,
        foreign_key: :tag_id,
        class_name: "Tag"
    
end
