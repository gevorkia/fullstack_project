json.park do
    json.extract! @park, :name, :summary, :description, :location, :acreage, :contact, :website, :lat, :lng         
end
# debugger
json.trails do 
    @park.trails.each do |trail|
        json.set! trail.id do 
            json.partial! 'api/trails/trail', trail: trail
        end 
    end
end