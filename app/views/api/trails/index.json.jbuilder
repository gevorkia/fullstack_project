@trails.each do |trail|
    json.set! trail.id do
        json.extract! trail, :id, :name, :difficulty, :summary, :description, :length, :elevation_gain, :route_type, :usage, :park_id, :lat, :lng
    end
end

json.photoUrls @trail.photos.map { |file| url_for(file) }