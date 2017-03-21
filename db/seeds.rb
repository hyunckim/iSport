# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cav_feed = Feed.create(url: "http://www.nba.com/cavaliers/rss.xml",
title: "Cavaliers-Cleveland",
description: "Cleveland Cavaliers Team News",
image: "http://www.logoeps.com/wp-content/uploads/2012/10/cleveland-cavaliers-logo-vector.png")

boston_feed=Feed.create(url: "http://www.nba.com/celtics/rss.xml",
title: "Boston Celtics",
description: "Boston Celtics Team News",
image: "http://www.logoeps.com/wp-content/uploads/2012/10/boston-celtics-logo-vector.png")

clippers_feed=Feed.create(url: "http://www.nba.com/clippers/rss.xml",
title: "LA Clippers",
description: "Los Angeles Clippers Team News",
image: "http://www.logoeps.com/wp-content/uploads/2012/12/los-angeles-clippers-logo-vector.png")

collection1 = Collection.create(title:"Basketball", user_id: 1)
collection2 = Collection.create(title:"Football", user_id: 1)

subscription1 = Subscription.create(feed_id: 1, collection_id: 1)
subscription2 = Subscription.create(feed_id: 2, collection_id: 1)
