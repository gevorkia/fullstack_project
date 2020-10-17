# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# to reset primary_key Ids
# ActiveRecord::Base.connection.reset_pk_sequence!('users')

User.destroy_all
# User.create!(first_name: "", last_name: "", email: "", password: "")

demo_user = User.create!(first_name: "demo", last_name: "user", email: "demouser@trails.com", password: "trails890")
user1 = User.create!(first_name: "Henry", last_name: "Thoreau", email: "HenryThoreau@walden.com", password: "Walden789")
user2 = User.create!(first_name: "Jane", last_name: "Goodall", email: "JaneGoodall@primatologist.com", password: "37Goodall")
user3 = User.create!(first_name: "Robert", last_name: "Frost", email: "RobertFrost@poetry.com", password: "Poet333")
user4 = User.create!(first_name: "William", last_name: "Saroyan", email: "WilliamSaroyan@playwright.com", password: "Hayastan!")
user5 = User.create!(first_name: "Diana", last_name: "Der Hovanessian", email: "DianaDerHovanessian@poetry.com", password: "Diaspora!")
user6 = User.create!(first_name: "Monte", last_name: "Melkonian", email: "MonteMelkonian@undefeated.com", password: "Duxov!2020")


Trail.destroy_all

# https://www.alltrails.com/explore/trail/us/california/sykes-hot-springs-via-pine-ridge-trail
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
    route_type: "Out & Back",
    usage: "heavy",
    park_id: park1.id,
    lat: 36.24612,
    lng: -121.78041
    )

# tags: Dog friendly, Backpacking, Camping, Fishing, Hiking, Nature trips, Bird watching
# Running, Forest, Hot springs, River, Views, Wild flowers, Wildlife, Bugs, Over grown
# Rocky, Scramble, Fee


# https://www.alltrails.com/trail/us/california/big-sur-river-gorge-trail
trail2 = Trail.create!(
    name: "Big Sur River Gorge Trail",
    difficulty: "easy",
    summary: "Big Sur River Gorge Trail is a 1.2 mile moderately trafficked out and back trail located near Big Sur, California that features a river and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and bird watching and is best used from April until September.",
    description: "",
    length: 1.2,
    elevation_gain: 75,
    route_type: "Out & Back",
    usage: "moderate",
    park_id: park1.id,
    lat: 36.24631,
    lng: -121.77578
    )

# tags: Kid friendly, Hiking, Nature trips, Walking, Bird watching, Forest, River, Wildlife, No dogs 


# https://www.alltrails.com/trail/us/california/big-sur-nature-trail
trail3 = Trail.create!(
    name: "Big Sur Nature Trail",
    difficulty: "easy",
    summary: "Big Sur Nature Trail is a 0.8 mile loop trail located near Big Sur, California that features a river and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round.",
    description: "Take a short walk along this nature trail to discover some of the native plants and wildlife that surrounds you.  The terrain changes dramatically along the trail from bay laurel trees to oaks, to redwoods, and you will learn how each of these plants plays an important roll within the local ecosystem.",
    length: 0.8,
    elevation_gain: 42,
    route_type: "Loop",
    usage: "heavy",
    park_id: park1.id,
    lat: 36.2509,
    lng: -121.78655
    )

# tags: Kid friendly, Hiking, Nature trips, Walking, Bird watching, Forest, River, Views, Wild flowers, No dogs


# https://www.alltrails.com/trail/us/california/mount-langley
trail4 = Trail.create!(
    name: "Mount Langley",
    difficulty: "strenuous",
    summary: "Mount Langley is a 23 mile heavily trafficked loop trail located near Lone Pine, California that features a lake and is rated as difficult. The trail is primarily used for hiking, camping, and backpacking and is best used from June until October.",
    description: "Mount Langley is the ninth highest peak in California. It is also the southernmost 14er in the United States.  It is only 5 miles from Mount Whitney and in the same range. Enjoy the beautiful views and difficult journey to the top.",
    length: 23.0,
    elevation_gain: 4688,
    route_type: "Loop",
    usage: "heavy",
    park_id: park2.id,
    lat: 36.45346,
    lng: -118.16998
    )

# tags: Backpacking, Camping, Hiking, Forest, Lake, River, Views, Bugs, Rocky, Scramble, Off trail, No dogs 


trail5 = Trail.create!(
    name: "Marble Falls Trail",
    difficulty: "moderate",
    summary: "",
    description: "",
    length: ,
    elevation_gain: ,
    route_type: "",
    usage: "",
    park_id: park2.id,
    lat: ,
    lng: 
    )

trail6 = Trail.create!(
    name: "",
    difficulty: "",
    summary: "",
    description: "",
    length: ,
    elevation_gain: ,
    route_type: "",
    usage: "",
    park_id: park2.id,
    lat: ,
    lng: 
    )

trail7 = Trail.create!(
    name: "",
    difficulty: "",
    summary: "",
    description: "",
    length: ,
    elevation_gain: ,
    route_type: "",
    usage: "",
    park_id: park2.id,
    lat: ,
    lng: 
    )

Park.destroy_all

# https://www.alltrails.com/parks/us/california/pfeiffer-big-sur-state-park
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

# https://www.alltrails.com/parks/us/california/sequoia-national-park
park2 = Park.create!(
    name: "Sequoia National Park",
    summary: "Looking for a great trail in Sequoia National Park, California? AllTrails has 101 great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Gearing up for a challenge? There are 47 hard trails in Sequoia National Park ranging from 6.4 to 74.9 miles and from 2,700 to 14,478 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
    description: "The beautiful Sequoia National Park features the tallest peak in the continental United States and the largest trees on the planet. Covering an impressive 404,063 acres, there is so much to explore including the Giant Forest. There you will find the world's largest tree, General Sherman, and many of the world's other largest trees. There are numerous caves, Mount Whitney, and the granite dome Moro Rock. 

                The park is open 24 hours a day, all year round. There will be closures, however, depending on weather conditions. 

                Fees:
                Vehicle Pass - $35.00
                This pass is valid for 1-7 days and includes everyone traveling in a single vehicle for Sequoia & Kings Canyon National Parks and Hume Lake District of Sequoia National Forest/Giant Sequoia National Monument. You can purchase this pass in advance at www.yourpassnow.com.

                Individual Entry Pass - $20.00
                This entry fee is for a single person traveling on foot or by bicycle. It is valid for 1-7 days in Sequoia & Kings Canyon National Parks and Hume Lake District of Sequoia National Forest/Giant Sequoia National Monument. ",
    location: "Tulare County, CA",
    acreage: 404063,
    contact: "559-565-3341",
    website: "https://www.nps.gov/seki/index.htm",
    lat: 36.511778, 
    lng: -118.702225
    )

Tag.destroy_all

tag1 = Tag.create!(name: "forest", tag_type: "park")
tag2 = Tag.create!(name: "hot spring", tag_type: "trail")

Taggable.destroy_all

taggable1 = Taggable.create!(taggable_type: "Trail", tag_id: tag2.id, taggable_id: trail1.id )
taggable2 = Taggable.create!(taggable_type: "Park", tag_id: tag1.id, taggable_id: park1.id )
taggable3 = Taggable.create!(taggable_type: "Trail", tag_id: tag1.id, taggable_id: trail1.id )

# picture1 = Picture.create!(name: "Jack's picture", pictureable_id: employee1.id, pictureable_type: "Employee")

# Trail.first.tags