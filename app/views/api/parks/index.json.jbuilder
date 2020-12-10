json.parks(@parks) do |park|
    json.extract! park, :id, :name, :summary, :description, :location, :acreage, :contact, :website, :lat, :lng
    json.photoUrls park.photos.map { |file| url_for(file) }
    json.trails(park.trails) do |trail|
        json.extract! trail, :id, :name, :difficulty, :summary, :description, :length, :elevation_gain, :route_type, :usage, :park_id, :lat, :lng
        json.tags do 
            trail.tags.each do |tag|
                json.set! tag.id do
                    json.extract! tag, :id, :name, :tag_type
                end
            end
        end
    end
end


# json.trails do 
#     @park.trails.each do |trail|
#         json.set! trail.id do 
#             json.extract! trail, :id, :name, :difficulty, :summary, :description, :length, :elevation_gain, :route_type, :usage, :park_id, :lat, :lng
#             # json.coverPhotoUrl url_for(trail.coverPhoto)
#             # json.photoUrls trail.photos.map { |file| url_for(file) }
#         end 
#     end
# end



# @parks.each do |park|
#     json.set! park.id do
#         json.extract! park, :id, :name, :summary, :description, :location, :acreage, :contact, :website, :lat, :lng
#             # park.trails.each do |trail|
#                 # json.set! trail.id do 
#                     # json.extract! trail, :id, :name, :difficulty, :summary, :description, :length, :elevation_gain, :route_type, :usage, :park_id, :lat, :lng
#                     # json.coverPhotoUrl url_for(trail.coverPhoto)
#                     # json.photoUrls trail.photos.map { |file| url_for(file) }
#                 # end 
#             # end  
#     end
# end
