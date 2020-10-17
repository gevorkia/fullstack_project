# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

# to reset primary_key Ids
ActiveRecord::Base.connection.reset_pk_sequence!('users')

demo_user = User.create!(first_name: "demo", last_name: "user", email: "demouser@trails.com", password: "trails890")

Park.destroy_all
Trail.destroy_all
Tag.destroy_all

tag1 = Tag.create!(name: "forest", tag_type: "park")
tag2 = Tag.create!(name: "hot spring", tag_type: "trail")

    park1 = Park.create!(
                name: "Pfeiffer Big Sur State Park",
                summary: "Looking for a great trail in Pfeiffer Big Sur State Park, 
                         California? AllTrails has 10 great hiking trails, forest 
                         trails, river trails and more, with hand-curated trail 
                         maps and driving directions as well as detailed reviews 
                         and photos from hikers, campers, and nature lovers like 
                         you. Just looking to take a quick stroll? We've got 5 easy 
                         trails in Pfeiffer Big Sur State Park ranging from 0.8 to 
                         2.5 miles and from 216 to 616 feet above sea level. Start 
                         checking them out and you'll be out on the trail in no 
                         time!",
                description: "Three are many scenic trails in Pfeiffer Big Sur 
                             State Park. Enjoy the wildlife and many different 
                             trees in the park.",
                location: "Big Sur, CA",
                acreage: 1006,
                contact: "831-667-1112",
                website: "https://www.parks.ca.gov/?page_id=570",
                lat: 36.379839,
                lng: -121.756157
                
                
                )

trail1 = Trail.create!(
        name: "Sykes Hot Springs via Pine Ridge Trail",
        difficulty: "strenuous",
        summary: "Sykes Hot Springs via Pine Ridge Trail is a 19.5 mile heavily 
                 trafficked out and back trail located near Big Sur, California 
                 that features hot springs and is rated as difficult. The trail 
                 offers a number of activity options and is accessible year- 
                 round. Dogs are also able to use this trail.",
        description: "Big Sur has many great destinations, but Sykes Hot 
                     Springs is definitely near the top of the list for anyone 
                     who has been there.  It is roughly 9-10 miles to the Skyes 
                     campground, and limited climbing after the first 2 hours 
                     (which can be steep at times, and tiring in the direct 
                     sun).  It is possible to treat it as a day hike, but it is 
                     recommended to take some time for the hike, as there are 
                     rolling green hills, several waterfalls, and wildflowers 
                     throughout the trail, none of which should be missed.

                     The hot springs is about 8 feet across and a couple of 
                     feet deep--about the size for 4 adults, and it stays 
                     around 100 degrees depending on rain.

                     Start by parking at the Ventana Wilderness area ranger 
                     station and heading towards the back parking lot. Parking 
                     is also available for $10.00 per calendar day Pine Ridge 
                     Trailhead Parking Lot.",
        length: 19.5,
        elevation_gain: 5646,
        route_type: "Out-and-Back",
        usage: "heavily trafficked",
        park_id: park1.id,
        lat: -36.341476,
        lng: -121.811816)


taggable1 = Taggable.create!(taggable_type: "Trail", tag_id: tag2.id, taggable_id: trail1.id )
taggable2 = Taggable.create!(taggable_type: "Park", tag_id: tag1.id, taggable_id: park1.id )
taggable3 = Taggable.create!(taggable_type: "Trail", tag_id: tag1.id, taggable_id: trail1.id )

# picture1 = Picture.create!(name: "Jack's picture", pictureable_id: employee1.id, pictureable_type: "Employee")