json.trail do
    json.extract! @trail, :id, :name, :difficulty, :summary, :description, :length, :elevation_gain, :route_type, :usage, :park_id, :lat, :lng
    json.coverPhotoUrl url_for(@trail.coverPhoto)
end

json.tags do 
    @trail.tags.each do |tag|
        json.set! tag.id do
            json.extract! tag, :id, :name, :tag_type
        end
    end
end

json.taggable do
    @trail.taggables.each do |taggable|
        json.set! taggable.id do 
            json.extract! taggable, :id, :tag_id, :taggable_id, :taggable_type
        end
    end
end

json.reviews do 
    @trail.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :rating, :review, :activity_date, :user_id, :trail_id 
            json.tags do 
                review.tags.each do |tag|
                    json.set! tag.id do 
                        json.extract! tag, :id, :name, :tag_type
                    end
                end
            end
        json.set! review.reviewer.id do
            json.extract! review.reviewer, :id, :first_name, :last_name

            if review.reviewer.profilePicture.attached? 
                json.profilePicture url_for(review.reviewer.profilePicture)
            end
        end
        end
    end
end