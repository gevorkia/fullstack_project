# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# to reset primary_key Ids

require 'open-uri'


User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
# User.create!(first_name: "", last_name: "", email: "", password: "")

demo_user = User.create!(first_name: "demo", last_name: "user", email: "demouser@trails.com", password: "password")
user1 = User.create!(first_name: "Henry", last_name: "Thoreau", email: "HenryThoreau@walden.com", password: "password")
user2 = User.create!(first_name: "Jane", last_name: "Goodall", email: "JaneGoodall@primatologist.com", password: "password")
user3 = User.create!(first_name: "Monte", last_name: "Melkonian", email: "MonteMelkonian@undefeated.com", password: "password")
user4 = User.create!(first_name: "William", last_name: "Saroyan", email: "WilliamSaroyan@playwright.com", password: "password")
user5 = User.create!(first_name: "Diana", last_name: "Hovanesian", email: "DianaDerHovanessian@poetry.com", password: "password")

henry = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/henry_thoreau.jpg")
user1.profilePicture.attach(io: henry, filename: "henry_thoreau.jpg")

jane = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/jane_goodall.jpg")
user2.profilePicture.attach(io: jane, filename: "jane_goodall.jpg")

monte = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/monte_melkonian.jpg")
user3.profilePicture.attach(io: monte, filename: "monte_melkonian.jpg")

william = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/william_saroyan.jpg")
user4.profilePicture.attach(io: william, filename: "william_saroyan.jpg")

diana = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/diana_hovanessian.jpg")
user5.profilePicture.attach(io: diana, filename: "diana_hovanessian.jpg")

# demo_user = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/hiker.png")
# demo_user.profilePicture.attach(io: demo_user, filename: "hiker.png")

Park.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('parks')

# https://www.alltrails.com/parks/us/california/pfeiffer-big-sur-state-park
park1 = Park.create!(
    name: "Pfeiffer Big Sur State Park",
    summary: "Looking for a great trail in Pfeiffer Big Sur State Park, California? MyTrails has 10 great hiking trails, forest trails, river trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Just looking to take a quick stroll? We've got 5 easy trails in Pfeiffer Big Sur State Park ranging from 0.8 to 2.5 miles and from 216 to 616 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
    description: "There are many scenic trails in Pfeiffer Big Sur State Park. Enjoy the wildlife and many different trees in the park. ",
    location: "Big Sur, CA",
    acreage: 1006,
    contact: "831-667-1112",
    website: "https://www.parks.ca.gov/?page_id=570",
    lat: 36.2456,
    lng: -121.7825
    )
# tags: hiking, forest, nature-trips, river, views, dogs-no, birding, kids, 
# wild-flowers, wildlife


# https://www.alltrails.com/parks/us/california/sequoia-national-park
park2 = Park.create!(
    name: "Sequoia National Park",
    summary: "Looking for a great trail in Sequoia National Park, California? MyTrails has 101 great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Gearing up for a challenge? There are 47 hard trails in Sequoia National Park ranging from 6.4 to 74.9 miles and from 2,700 to 14,478 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
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
    summary: "Sykes Hot Springs via Pine Ridge Trail is a 19.5 mile heavily trafficked out and back trail located near Big Sur, California that features hot springs and is rated as difficult. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail.",
    description: "Big Sur has many great destinations, but Sykes Hot Springs is definitely near the top of the list for anyone who has been there.  It is roughly 9-10 miles to the Skyes campground, and limited climbing after the first 2 hours (which can be steep at times, and tiring in the direct sun).  It is possible to treat it as a day hike, but it is recommended to take some time for the hike, as there are rolling green hills, several waterfalls, and wildflowers throughout the trail, none of which should be missed.

                The hot springs is about 8 feet across and a couple of feet deep--about the size for 4 adults, and it stays around 100 degrees depending on rain.

                Start by parking at the Ventana Wilderness area ranger station and heading towards the back parking lot. Parking is also available for $10.00 per calendar day Pine Ridge Trailhead Parking Lot.",
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
    name: "High Sierra Trail: Crescent Meadow to Whitney",
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
ActiveRecord::Base.connection.reset_pk_sequence!('tags')

a1 = Tag.create(name: "hiking", tag_type: "activity")
a2 = Tag.create(name: "nature trips", tag_type: "activity")
a3 = Tag.create(name: "snow-shoeing", tag_type: "activity")
a4 = Tag.create(name: "camping", tag_type: "activity")
a5 = Tag.create(name: "backpacking", tag_type: "activity")
a6 = Tag.create(name: "fishing", tag_type: "activity")
a8 = Tag.create(name: "running", tag_type: "activity")
a9 = Tag.create(name: "walking", tag_type: "activity")
a10 = Tag.create(name: "bird watching", tag_type: "activity")
a11 = Tag.create(name: "horseback-riding", tag_type: "activity")
a12 = Tag.create(name: "trail-running", tag_type: "activity")


f1 = Tag.create(name: "river", tag_type: "feature")
f2 = Tag.create(name: "views", tag_type: "feature")
f3 = Tag.create(name: "forest", tag_type: "feature")
f4 = Tag.create(name: "wildlife", tag_type: "feature")
f5 = Tag.create(name: "wild flowers", tag_type: "feature")
f6 = Tag.create(name: "hot spring", tag_type: "feature")
f7 = Tag.create(name: "lake", tag_type: "feature")
f8 = Tag.create(name: "waterfall", tag_type: "feature")
f9 = Tag.create(name: "snow", tag_type: "feature")
f10 = Tag.create(name: "partially paved", tag_type: "feature")
f11 = Tag.create(name: "kid friendly", tag_type: "feature")
f12 = Tag.create(name: "dog friendly", tag_type: "feature")


o1 = Tag.create(name: "great!", tag_type: "obstacle")
o2 = Tag.create(name: "overgrown", tag_type: "obstacle")
o3 = Tag.create(name: "rocky", tag_type: "obstacle")
o4 = Tag.create(name: "scramble", tag_type: "obstacle")
o5 = Tag.create(name: "muddy", tag_type: "obstacle")
o6 = Tag.create(name: "bugs", tag_type: "obstacle")
o7 = Tag.create(name: "closed", tag_type: "obstacle")
o8 = Tag.create(name: "flooded", tag_type: "obstacle")
o9 = Tag.create(name: "icy", tag_type: "obstacle")
o10 = Tag.create(name: "snow", tag_type: "obstacle")
o11 = Tag.create(name: "washed out", tag_type: "obstacle")
o12 = Tag.create(name: "no shade", tag_type: "obstacle")
o13 = Tag.create(name: "bridge out", tag_type: "obstacle")
o14 = Tag.create(name: "fee", tag_type: "obstacle")

Taggable.destroy_all

# ADD OBSTACLES TO EACH PARK FOR TRAIL CONDITIONS

Taggable.create(tag_id: f12.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: a5.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: a4.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: a6.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: a1.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: a2.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: a10.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: a8.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: f3.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: f6.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: f1.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: f2.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: f5.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: f4.id, taggable_id: trail1.id, taggable_type: "Trail")
# Taggable.create(tag_id: o5.id, taggable_id: trail1.id, taggable_type: "Trail")
# Taggable.create(tag_id: o1.id, taggable_id: trail1.id, taggable_type: "Trail")
# Taggable.create(tag_id: o2.id, taggable_id: trail1.id, taggable_type: "Trail")
# Taggable.create(tag_id: o3.id, taggable_id: trail1.id, taggable_type: "Trail")
# Taggable.create(tag_id: o4.id, taggable_id: trail1.id, taggable_type: "Trail")

Taggable.create(tag_id: f11.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: a1.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: a2.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: a9.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: a10.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: f3.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: f1.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: f4.id, taggable_id: trail2.id, taggable_type: "Trail")

Taggable.create(tag_id: f11.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: a1.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: a2.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: a9.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: a10.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: f3.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: f1.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: f4.id, taggable_id: trail3.id, taggable_type: "Trail")

Taggable.create(tag_id: a5.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: a4.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: a1.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: f3.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: f7.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: f1.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: f2.id, taggable_id: trail4.id, taggable_type: "Trail")
# Taggable.create(tag_id: o5.id, taggable_id: trail4.id, taggable_type: "Trail")
# Taggable.create(tag_id: o2.id, taggable_id: trail4.id, taggable_type: "Trail")
# Taggable.create(tag_id: o3.id, taggable_id: trail4.id, taggable_type: "Trail")
# Taggable.create(tag_id: o6.id, taggable_id: trail4.id, taggable_type: "Trail")

Taggable.create(tag_id: a4.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: a1.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: a2.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: a9.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: f5.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: f4.id, taggable_id: trail5.id, taggable_type: "Trail")

Taggable.create(tag_id: a5.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: a4.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: a6.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: a1.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: a2.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f3.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f7.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f6.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f1.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f2.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f5.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f4.id, taggable_id: trail6.id, taggable_type: "Trail")
# Taggable.create(tag_id: o2.id, taggable_id: trail6.id, taggable_type: "Trail")
# Taggable.create(tag_id: o3.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: f9.id, taggable_id: trail6.id, taggable_type: "Trail")

Taggable.create(tag_id: f11.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: a1.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: f3.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: f10.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: f2.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: f5.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: f4.id, taggable_id: trail7.id, taggable_type: "Trail")

# taggable1 = Taggable.create!(taggable_type: "Trail", tag_id: tag2.id, taggable_id: trail1.id )
# taggable2 = Taggable.create!(taggable_type: "Park", tag_id: tag1.id, taggable_id: park1.id )
# taggable3 = Taggable.create!(taggable_type: "Trail", tag_id: tag1.id, taggable_id: trail1.id )

# picture1 = Picture.create!(name: "Jack's picture", pictureable_id: employee1.id, pictureable_type: "Employee")

# in rails c: Trail.first.tags

# ADD TRAIL CONDITIONS (obstacles) for create review modal
Taggable.create(tag_id: o1.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o2.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o3.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o4.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o5.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o6.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o7.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o8.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o9.id, taggable_id: trail1.id, taggable_type: "Trail")
Taggable.create(tag_id: o10.id, taggable_id: trail1.id, taggable_type: "Trail")

Taggable.create(tag_id: o1.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o2.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o3.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o4.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o5.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o6.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o7.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o8.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o9.id, taggable_id: trail2.id, taggable_type: "Trail")
Taggable.create(tag_id: o10.id, taggable_id: trail2.id, taggable_type: "Trail")

Taggable.create(tag_id: o1.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o2.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o3.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o4.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o5.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o6.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o7.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o8.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o9.id, taggable_id: trail3.id, taggable_type: "Trail")
Taggable.create(tag_id: o10.id, taggable_id: trail3.id, taggable_type: "Trail")

Taggable.create(tag_id: o1.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o2.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o3.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o4.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o5.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o6.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o7.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o8.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o9.id, taggable_id: trail4.id, taggable_type: "Trail")
Taggable.create(tag_id: o10.id, taggable_id: trail4.id, taggable_type: "Trail")

Taggable.create(tag_id: o1.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o2.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o3.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o4.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o5.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o6.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o7.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o8.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o9.id, taggable_id: trail5.id, taggable_type: "Trail")
Taggable.create(tag_id: o10.id, taggable_id: trail5.id, taggable_type: "Trail")

Taggable.create(tag_id: o1.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o2.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o3.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o4.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o5.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o6.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o7.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o8.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o9.id, taggable_id: trail6.id, taggable_type: "Trail")
Taggable.create(tag_id: o10.id, taggable_id: trail6.id, taggable_type: "Trail")

Taggable.create(tag_id: o1.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o2.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o3.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o4.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o5.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o6.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o7.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o8.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o9.id, taggable_id: trail7.id, taggable_type: "Trail")
Taggable.create(tag_id: o10.id, taggable_id: trail7.id, taggable_type: "Trail")


Review.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')

#trail1 reviews
r1 = Review.create(
    activity_date: "2020-11-11", 
    rating: 5, 
    review: "Sad to hear it is now closed. This is a fantastic overnight hike that takes you into the hills to view a great cross section of the flora and fauna Big Sur has to offer. A glass of wine, a dip in the water and conversation with others was a great cap the day. I hope the restoration efforts are successful, and that the trail can reopen in a more sustainable manner.", 
    tag_ids: [a5.id, a4.id, a1.id], 
    user_id: user2.id, 
    trail_id: trail1.id
)

r2 = Review.create(
    activity_date: "2020-10-14", 
    rating: 5, 
    review: "Such a shame to hear of the overcrowding. I camped there in 1984, then again in 1992, very few people. I was hoping to go back, so it's sad to hear of the long term closure and the overcrowding there. In terms of the trail itself, it can be tough due to the switchbacks and inclines. You're apt to see fauna once it re-opens. Ahh, nature will recover!",
    tag_ids: [f4.id, a4.id, a10.id], 
    user_id: user4.id, 
    trail_id: trail1.id
)
r3 = Review.create(
    activity_date: "2017-01-29", 
    rating: 5, 
    review: "Tough accent. Amazing views. Awesome camping.",
    tag_ids: [a4.id, a2.id], 
    user_id: user3.id, 
    trail_id: trail1.id
)
r4 = Review.create(
    activity_date: "2016-09-12", 
    rating: 3, 
    review: "Loved it but there's too much trash.",
    tag_ids: [a2.id], 
    user_id: user1.id, 
    trail_id: trail1.id
)

# trail2 reviews
r5 = Review.create(
    activity_date: "2020-8-10", 
    rating: 4, 
    review: "Fine. Not bad. Need to cross the river so must be prepared for calf-depth wading.",
    tag_ids: [a1.id], 
    user_id: user3.id, 
    trail_id: trail2.id
)
r6 = Review.create(
    activity_date: "2019-07-21", 
    rating: 5, 
    review: "It is a nice trail and a lot of rocks climbing.  Nice view and cold water for swimming",
    tag_ids: [a1.id], 
    user_id: user2.id, 
    trail_id: trail2.id
)
r7 = Review.create(
    activity_date: "2019-03-03", 
    rating: 5, 
    review: "Delightful river walk",
    tag_ids: [a1.id], 
    user_id: user4.id, 
    trail_id: trail2.id
)

# trail3 reviews
r8 = Review.create(
    activity_date: "2020-11-09", 
    rating: 5, 
    review: "Great scenic trail along the river redwoods",
    tag_ids: [f1.id, a2.id], 
    user_id: user5.id, 
    trail_id: trail3.id
)
r9 = Review.create(
    activity_date: "2020-07-26", 
    rating: 4, 
    review: "It’s $10 cash, exact change to park inside the park. We didn’t follow this trail exactly. There are a few easy short trails that all come together at different points. We did the Redwood Deck Trail, Warden’s Trail, and the River Path. They are not hikes, but walks through scenery you would expect at Big Sur. The Redwoods and their burn scars are always a sight to see. During our visit there were a lot of Steller Jays flying around too. Such gorgeous royal blue birds. We crossed over a bridge and were also able to cross over shallow parts of the river. It’s what you make of it. Beautiful, super easy, and short mini adventure.",
    tag_ids: [a1.id], 
    user_id: user2.id, 
    trail_id: trail3.id
)
r10 = Review.create(
    activity_date: "2019-03-19", 
    rating: 4, 
    review: "Pretty easy",
    tag_ids: [a2.id], 
    user_id: user3.id, 
    trail_id: trail3.id
)

# trail4 reviews
r11 = Review.create(
    activity_date: "2020-08-21", 
    rating: 5, 
    review: "We did this as a day hike. The trail up to Cottonwood Lakes is beautiful and shaded with dense trees. If you have the time, plan on a night at Cottonwood Lakes. The views are simply amazing. We took Old Army Pass up and down. The push from Cottonwood Lakes to the summit is rocky, sandy, and gravely and makes for a tedious climb. All worth for the breathtaking views from the top.",
    tag_ids: [a1.id, o1.id, o3.id, o4.id], 
    user_id: user5.id, 
    trail_id: trail4.id
)
r12 = Review.create(
    activity_date: "2020-07-03", 
    rating: 5, 
    review: "Hiked new army in and old army out logging 22.15 miles taking the group 12 hours round trip. The views at the top and on the way of the lakes were spectacular and well worth the effort. The elevation was tough for both the two others in the group with one not making it up past 12,500 feet. Once you get to the cairns near the top its also mostly sand and tough to navigate so be prepared.",
    tag_ids: [a1.id], 
    user_id: user1.id, 
    trail_id: trail4.id
)
r13 = Review.create(
    activity_date: "2020-08-30", 
    rating: 4, 
    review: "Big time warning, the CA fires smoke came in seriously starting at noon.  By 2 pm, it was unbearable to hike up in the cottonwood lakes and below.  Lungs still recovering.  As everyone said, this hike is moderate until the last 2.4 miles uphill.  All in loose gravel and challenging to step.  I would say this is 80% as challenging as Whitney",
    tag_ids: [o4.id], 
    user_id: user4.id, 
    trail_id: trail4.id
)

# trail5 reviews
r14 = Review.create(
    activity_date: "2020-10-14", 
    rating: 5, 
    review: "Sun beats down on the side of the draws  for the first half of the way up then it’s mostly shaded. You end at a waterfall which had a decent amount of flow. It was colder sitting out there because of the wind. Way back took us half the amount of time as it’s steadily downhill for most of it. Great for an easy day hike for the more experienced. Would be a little harder for new hikers.",
    tag_ids: [a1.id], 
    user_id: user3.id, 
    trail_id: trail5.id
)
r15 = Review.create(
    activity_date: "2020-11-26", 
    rating: 4, 
    review: "Started out fairly easy but the terrain gets interesting: narrow and rocky.  But a great hike all in all, the falls are like an oasis.",
    tag_ids: [a1.id], 
    user_id: user5.id, 
    trail_id: trail5.id
)
r16 = Review.create(
    activity_date: "2020-08-12", 
    rating: 5, 
    review: "Enjoyed the hike.  There is still water in the falls.  Take some time and explore around.  We found a cave by the upper pool.",
    tag_ids: [a2.id, f8.id], 
    user_id: user2.id, 
    trail_id: trail5.id
)

# trail6 reviews
r17 = Review.create(
    activity_date: "2020-08-26", 
    rating: 5, 
    review: "Trail was in a perfect condition (maybe a bit muddy in a few places). Plenty of streams to refill water. Some mosquitoes at Junction Meadow, but not too crazy.

    The trail itself is beautiful, stunning views, plenty of flowers and wildlife",
    tag_ids: [a5.id, a1.id],
    user_id: user2.id, 
    trail_id: trail6.id
)
r18 = Review.create(
    activity_date: "2020-07-16", 
    rating: 5, 
    review: "This trail was breathtaking in beauty and elevation. It was incredible. The hike was difficult in many places along the route, but far from impossible. I would highly recommend this trip for experienced hikers, and if you do go, say hello to Odin for me when you get to Valhalla! It certainly gave me a BAD case of mountain craving sickness. I would do it again for sure.",
    tag_ids: [a5.id, o6.id, o8.id, o5.id, o3.id, a10.id], 
    user_id: user5.id, 
    trail_id: trail6.id
)
r19 = Review.create(
    activity_date: "2019-08-25", 
    rating: 5, 
    review: "What an epic trip! This was a high snow/water year, so with that, it was also a high mosquito year!  One sketchy thing was the trail blowout above Hamilton Lakes! Yikes, we made it but whew!! The trail is well marked and the views are just breathtaking. Lots of elevation gain/loss so take your time and just enjoy the beauty. I would highly suggest recording your trip..used my cellphone but would have taken my time more to do more video with description/narrative.",
    tag_ids: [a5.id], 
    user_id: user3.id, 
    trail_id: trail6.id
)
# trail7 reviews
r20 = Review.create(
    activity_date: "2020-11-27", 
    rating: 5, 
    review: "Magical hike off the beaten track among silent giants.",
    tag_ids: [a1.id, f3.id], 
    user_id: user5.id, 
    trail_id: trail7.id
)
r21 = Review.create(
    activity_date: "2020-10-30", 
    rating: 5, 
    review: "Great hike and great weather.  One of my all-time favorites.",
    tag_ids: [a1.id], 
    user_id: user4.id, 
    trail_id: trail7.id
)
r22 = Review.create(
    activity_date: "2020-08-08", 
    rating: 5, 
    review: "Great hike. Mostly shaded. It was 90+ in Three Rivers but pleasant on the trail. There are a lot of trails in this area and it can be easy to get confused. We downloaded the map which helped a lot. The high altitude definitely made it feel longer than 7 miles. Ate lunch at Tharp’s cabin which was a great spot. Pack water.",
    tag_ids: [a2.id], 
    user_id: user1.id, 
    trail_id: trail7.id
)

# photos
# attachments through console. only works in development, not production
# park1.photos.attach(io: File.open("/Users/Lili/Desktop/big_sur/big_sur_1.jpg"), filename: "big_sur_1.jpg")

# trail1.coverPhoto.attach(io: File.open("/Users/Lili/Desktop/big_sur/sykes/sykes_1.jpg"), filename: "sykes_1.jpg")
# trail1.photos.attach(io: File.open("/Users/Lili/Desktop/big_sur/sykes/sykes_1.jpg"), filename: "sykes_1.jpg")

# park photos

bigsur1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/big_sur_1.jpg")
bigsur2 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/big_sur_2.jpg")
bigsur3 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/big_sur_3.png")

park1.photos.attach(io: bigsur1, filename: "big_sur_1.jpg")
park1.photos.attach(io: bigsur2, filename: "big_sur_2.jpg")
park1.photos.attach(io: bigsur3, filename: "big_sur_3.png")

sequoia1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/sequoia_1.png")
sequoia2 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/sequoia_2.png")
sequoia3 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/sequoia_3.jpg")

park2.photos.attach(io: sequoia1, filename: "sequoia_1.png")
park2.photos.attach(io: sequoia2, filename: "sequoia_2.png")
park2.photos.attach(io: sequoia3, filename: "sequoia_3.jpg")

# trail photos

sykes1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/sykes_1.jpg")
# sykes2 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/sykes_2.jpg")
# sykes3 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/sykes_3.jpg")
# sykes4 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/sykes_4.jpg")

trail1.coverPhoto.attach(io: sykes1, filename: "sykes_1.jpg")
# trail1.photos.attach(io: sykes2, filename: "sykes_2.jpg")
# trail1.photos.attach(io: sykes3, filename: "sykes_3.jpg")
# trail1.photos.attach(io: sykes4, filename: "sykes_4.jpg")

river_gorge1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/river_gorge_1.jpg")
trail2.coverPhoto.attach(io: river_gorge1, filename: "river_gorge_1.jpg")

nature_trail1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/nature_trail_1.png")
trail3.coverPhoto.attach(io: nature_trail1, filename: "nature_trail_1.png")

mount_langley1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/mount_langley_1.png")
mount_langley2 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/mount_langley_2.png")
mount_langley3 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/mount_langley_3.png")
# mount_langley4 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/mount_langley_4.png")

trail4.coverPhoto.attach(io: mount_langley1, filename: "mount_langley_1.png")
# trail4.photos.attach(io: mount_langley1, filename: "mount_langley_1.png")
# can't attach same photo to coverPhoto and separate, causes problems
trail4.photos.attach(io: mount_langley2, filename: "mount_langley_2.png")
trail4.photos.attach(io: mount_langley3, filename: "mount_langley_3.png")
# trail4.photos.attach(io: mount_langley4, filename: "mount_langley_4.png")

marble_falls1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/marble_falls_1.png")
trail5.coverPhoto.attach(io: marble_falls1, filename: "marble_falls_1.png") 

hst1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/hst_1.jpg")
trail6.coverPhoto.attach(io: hst1, filename: "hst_1.jpg")

giant_forest1 = open("https://mytrails-seeds.s3-us-west-1.amazonaws.com/giant_forest_1.png")
trail7.coverPhoto.attach(io: giant_forest1, filename: "giant_forest_1.png") 



