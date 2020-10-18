# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# to reset primary_key Ids




User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
# User.create!(first_name: "", last_name: "", email: "", password: "")

demo_user = User.create!(first_name: "demo", last_name: "user", email: "demouser@trails.com", password: "trails890")
user1 = User.create!(first_name: "Henry", last_name: "Thoreau", email: "HenryThoreau@walden.com", password: "Walden789")
user2 = User.create!(first_name: "Jane", last_name: "Goodall", email: "JaneGoodall@primatologist.com", password: "37Goodall")
user3 = User.create!(first_name: "Robert", last_name: "Frost", email: "RobertFrost@poetry.com", password: "Poet333")
user4 = User.create!(first_name: "William", last_name: "Saroyan", email: "WilliamSaroyan@playwright.com", password: "Hayastan!")
user5 = User.create!(first_name: "Diana", last_name: "Der Hovanessian", email: "DianaDerHovanessian@poetry.com", password: "Diaspora!")
user6 = User.create!(first_name: "Monte", last_name: "Melkonian", email: "MonteMelkonian@undefeated.com", password: "Duxov!2020")



Park.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('parks')

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
# tags: hiking, forest, nature-trips, river, views, dogs-no, birding, kids, 
# wild-flowers, wildlife


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

# tags: hiking, views, forest, dogs-no, nature-trips, wildlife, wild-flowers, 
# birding, camping, backpacking, walking, trail-running, river, lake, kids, 
# waterfall, fishing, snowshoeing, horseback-riding, paved, partially-paved 



Trail.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('trails')

# Big Sur Park (park1.id)
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
    description: "Big Sur River Gorge is one of the big draws at Pfeiffer Big Sur State Park, facilitating a romp to a swimming hole in the wilds of Big Sur. An unmaintained trail connects the park’s campground to a inviting pool of clear river water in a granite-walled gorge. Multiple river crossings along the way make for a rock-hopping hike of half a mile round trip. Persistent adventurers can continue above the swimming hole to more cascades, boulders, and pools in the Big Sur River Gorge.",
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

# Sequoia Park (park2.id)
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

# https://www.alltrails.com/trail/us/california/marble-falls-trail--2
trail5 = Trail.create!(
    name: "Marble Falls Trail",
    difficulty: "moderate",
    summary: "Marble Falls Trail is a 7.4 mile heavily trafficked out and back trail located near Stony Creek Village, California that features a waterfall and is rated as moderate. The trail offers a number of activity options and is best used from May until November.",
    description: "A great spring time hike through a deep canyon in the Foothills.

                This hike offers an abundant and diverse plant life as you switchback through shady, woodland chaparral. Oaks, cottonwoods, redbuds and dogwoods are skirted with a variety of flowers in the spring like brodiaea, madia, lilies and Chinese houses. The trail ends at Marble Falls cascading over polished marble.",
    length: 7.4,
    elevation_gain: 1627,
    route_type: "Out & Back",
    usage: "heavy",
    park_id: park2.id,
    lat: 36.51464,
    lng: -118.80085
    )

# tags: Camping, Hiking, Nature trips, Walking, Bird watching, Running, Forest, 
# River, Views, Waterfall, Wild flowers, Wildlife, No dogs 

# https://www.alltrails.com/trail/us/california/high-sierra-trail-crescent-meadow-to-whitney-portal
trail6 = Trail.create!(
    name: "High Sierra Trail: Crescent Meadow to Whitney Portal",
    difficulty: "strenuous",
    summary: "High Sierra Trail: Crescent Meadow to Whitney Portal is a 72 mile heavily trafficked point-to-point trail located near Stony Creek Village, California that features a lake and is rated as difficult. The trail offers a number of activity options and is best used from May until October.",
    description: "Each paragraph below roughly corresponds to a day on the trail, although there are many ways to break up the hike, and day hikes are also possible.

                1. The HST begins at Crescent Meadow, or start from the trailhead at Wolverton. The trail climbs along a steep ridge. To the right, the Middle Fork of the Kaweah River. To your left, the summit of Alta Peak at 11,000 feet. The 1st camp is at 9-Mile Creek - this creek is not labeled as such, but is referred to as 9-Mile because it is 9 miles in. Or, move on to the next creek crossing (Buck) or to the backpacker camp at Bearpaw Meadow. All three have bear boxes.

                2. The second stretch is exposed alpine terrain. From Buck, the trail climbs 600 ft to Bearpaw Meadow. Here is a backpacker's camp. For the next two miles, the trail descends from Bearpaw to Lone Pine Creek. You will find a bridge over a gorge but it's another mile until easy water. There are some campsites throughout. Here you find granite formations like Valhalla and Angel Wings. Eventually you reach Hamilton Lake. Stay here or continue up to Precipice and through Hamilton Gorge. This stretch ends at Precipice Lake.

                3. Hike along through a boulder field and past some shallow ponds in an alpine zone.  A mile in you'll be standing atop Kaweah Gap, the pass which marks the trail's crossing of the Great Western Divide. 9-Lakes basin is to your left, but to stay on the trail descend to your right into Big Arroyo. The trail descends through Big Arroyo for several miles, eventually meeting a trail junction near an old patrol cabin. There are many campsites scattered. This junction is the beginning of a gradual, hot climb out of Big Arroyo. It is the driest stretch of the trail so fill up on water in the Arroyo. As you climb you'll get views of the southern peaks of the Great Western Divide before entering the forest atop Chagoopa Plateau. Eventually, if you choose the right fork at the trail junction, you'll arrive at Moraine Lake, a great place for a swim and camp.

                4. For the first few miles of this stretch you'll get to enjoy easy hiking as the trail winds gradually through the woods with no steep ascents or descents. If you have a sharp eye, keep a lookout for Mount Whitney in the distance. It's not a clear view, but it's the first peek you'll get of the highest point in the lower 48 states, one you'll hopefully be standing on in a few short days. You'll pass the remains of an old sheep herder's cabin and through a forest of burnt tree trunks. Eventually you'll hike along the southeastern edge of Sky Parlor Meadow with an unobstructed view of Mt Kaweah. After joining back together with the other fork of the High Sierra Trail, the long, ~2500 foot descent into the Kern Canyon begins. It starts off moderate but turns into tight, rocky, steep switchbacks. Before the switchbacks, the trail passes through a dense field of ferns - this is where you need to go on rattlesnake alert. They are common here and on the upcoming stretch of trail.

                5. Next is a simple and easy stretch at the midpoint of the High Sierra Trail. The trail parallels the Kern River, climbing gradually through the Canyon. You'll have plenty of water access. Approximately eight miles from the Hot Spring you'll reach Junction Meadow, the not-so-cleverly named open space where other the High Sierra Trail meets the trail to Colby Pass and other destinations to the west. There are many campsites at Junction Meadow. From here, the trail follows the right fork of the Kern River and starts to climb. Before too long you'll reach the junction to Wallace Creek. The High Sierra Trail continues to the right with a sign informing you of the short 14.8 miles left until Mount Whitney. There are a few campsites if you continue straight towards Upper Kern Basin.

                6. This segment goes a western-approach climb of Mount Whitney: Guitar Lake. This is a stretch that climbs about 3500 feet in ten miles. Upon meeting Wallace Creek (which is far below you), the trail turns to the east until you eventually meet it at the junction with the JMT. About 3.5 miles in the High Sierra Trail meets the John Muir Trail where it crosses Wallace Creek. At the junction there are many campsites. Finally, you'll reach Crabtree Meadow where there is a backcountry ranger station, places to camp, and water access. From here, the trail climbs another ~800 feet in 2.5 miles to Guitar Lake at 11,400 feet.  

                7. The summit of Whitney is about a 3000 foot climb from Guitar Lake. The first 2.5 miles and 2000 feet switchback up the western side of the ridge until reaching Trail Junction. Here, drop your pack (keep your food protected from marmots!), grab your camera and water, and head to the summit. The summit is another 1000 feet up in about two miles. After summiting, it's about 11 miles and 6000 feet of descent to the trailhead. Back at the Junction, pick up your pack and climb the final small stretch to Trail Crest, then descend the famous 97 switchbacks.",
    length: 72.0,
    elevation_gain: 15475,
    route_type: "Point-to-Point",
    usage: "heavy",
    park_id: park2.id,
    lat: 36.55468,
    lng: -118.74879
    )

# tags: Backpacking, Camping, Fishing, Hiking, Nature trips, Forest, Lake, Hot springs,
# River, Views, Wild flowers, Wildlife, Rocky, Scramble, Snow, No dogs 


# https://www.alltrails.com/trail/us/california/giant-forest-loop-trail
trail7 = Trail.create!(
    name: "Giant Forest Loop Trail",
    difficulty: "easy",
    summary: "Giant Forest Loop Trail is a 6.7 mile moderately trafficked loop trail located near Three Rivers, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking and is best used from May until October.",
    description: "The trailhead at General Sherman Tree parking lot is about 5 minutes away from the Lodgepole Visitor Center. It is a very popular hike in the summertime, so you may need to park your car at the visitor center and hop on the free shuttle to the trailhead lot. Unless you have the annual interagency pass, you must pay a $35 fee to enter the park.

                This trail will take you through the heart of the giant sequoia forest, which is home to about half of the earth’s largest and longest-living trees with over 8,000 of them. At the last half mile you will be able to admire the majestic General Sherman Tree. Dated to be around 2,100 years old, 100 feet wide, and 275 feet tall it is the largest and tallest living tree in the world!

                The park is open year-round and makes for a spectacular winter destination, though some roads will be closed in the winter time due to snow. You should still be able to access the trailhead, though car chains may be required. There is a restroom at the parking lot but no water or services, so be sure to pack accordingly. Dogs are not allowed on the trail or on any non-paved area (campsites excluded) in the park.",
    length: 6.7,
    elevation_gain: 1223,
    route_type: "Loop",
    usage: "moderate",
    park_id: park2.id,
    lat: 36.585,
    lng: -118.74941
    )

# tags: Kid friendly, Hiking, Forest, Partially paved, Views, Wild flowers, Wildlife, No dogs



Tag.destroy_all

# tag1 = Tag.create!(name: "forest", tag_type: "park")
# tag2 = Tag.create!(name: "hot spring", tag_type: "trail")

Taggable.destroy_all

# taggable1 = Taggable.create!(taggable_type: "Trail", tag_id: tag2.id, taggable_id: trail1.id )
# taggable2 = Taggable.create!(taggable_type: "Park", tag_id: tag1.id, taggable_id: park1.id )
# taggable3 = Taggable.create!(taggable_type: "Trail", tag_id: tag1.id, taggable_id: trail1.id )

# picture1 = Picture.create!(name: "Jack's picture", pictureable_id: employee1.id, pictureable_type: "Employee")

# in rails c: Trail.first.tags