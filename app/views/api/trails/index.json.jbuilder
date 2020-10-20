@trails.each do |trail|
    json.set! trail.id do
        json.partial! 'api/trails/trail', trail: trail
    end
end

json.photoUrls @trail.photos.map { |file| url_for(file) }