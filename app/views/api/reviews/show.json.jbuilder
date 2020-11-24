json.review do
    json.extract! @review, :id, :activity_date, :rating, :review, :user_id, :trail_id         
end

json.taggable do
    @review.taggables.each do |taggable|
        json.set! taggable.id do 
            json.extract! taggable, :id, :tag_id, :taggable_id, :taggable_type
        end 
    end
end