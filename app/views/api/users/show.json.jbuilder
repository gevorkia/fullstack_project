json.extract! @user, :id, :first_name, :last_name, :email, :about_me, :location, :privacy

if @user.profilePicture.attached? 
    json.profilePicture url_for(user.profilePicture)
end