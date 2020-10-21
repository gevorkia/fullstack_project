json.trail do
    json.extract! @trail, :id, :name, :difficulty, :summary, :description, :length, :elevation_gain, :route_type, :usage, :park_id, :lat, :lng
    json.coverPhotoUrl url_for(@trail.coverPhoto)
end