json.park do
    json.extract! @park, :id, :name, :summary, :description, :location, :acreage, :contact, :website, :lat, :lng  
    
    # json.park.photos.each do |photo|
    #     json.photoUrl url_for(park.photo)       
    # end
    json.photoUrls @park.photos.map { |file| url_for(file) }
end


# json.photoUrl url_for(@park.photo) 

json.trails do 
    @park.trails.each do |trail|
        json.set! trail.id do 
            json.extract! trail, :id, :name, :difficulty, :summary, :description, :length, :elevation_gain, :route_type, :usage, :park_id, :lat, :lng
            # json.coverPhotoUrl url_for(trail.coverPhoto)
            # json.photoUrls trail.photos.map { |file| url_for(file) }
        end 
    end
end

