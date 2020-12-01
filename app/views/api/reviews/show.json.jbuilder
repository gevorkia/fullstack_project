json.review do
    json.set! @review.reviewer.id do
        json.extract! @review.reviewer, :id, :first_name, :last_name

        if @review.reviewer.profilePicture.attached? 
            json.profilePicture url_for(@review.reviewer.profilePicture)
        end
    end
    json.extract! @review, :id, :activity_date, :rating, :review, :user_id, :trail_id
    json.tags do 
        @review.tags.each do |tag|
            json.set! tag.id do 
                json.extract! tag, :id, :name, :tag_type
            end
        end
    end        
end



json.taggable do
    @review.taggables.each do |taggable|
        json.set! taggable.id do 
            json.extract! taggable, :id, :tag_id, :taggable_id, :taggable_type
        end 
    end
end