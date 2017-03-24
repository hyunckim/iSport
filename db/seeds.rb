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

cbs_feed= Feed.create(url: "http://rss.cbssports.com/rss/headlines",
  title: "CBSSports.com",
  description: "The latest news from CBSSports.com",
  image: "https://pbs.twimg.com/profile_images/696218981145772033/8mYnTpHm.png")

sports_world_news = Feed.create(url: "https://rss2json.com/#rss_url=http%3A%2F%2Fwww.sportsworldnews.com%2Frss%2Farchives%2Fall.xml",
  title: "Sports World News",
  description: "Top News RSS Feed",
  image: "https://pbs.twimg.com/profile_images/466596743170121729/1yY1CeHZ_400x400.png")


collection1 = Collection.create(title:"Basketball", user_id: 1)
collection2 = Collection.create(title:"Football", user_id: 1)
collection3 = Collection.create(title:"Tennis", user_id: 1)
collection4 = Collection.create(title:"Soccer", user_id: 1)
collection5 = Collection.create(title:"Boxing", user_id: 1)

subscription1 = Subscription.create(feed_id: 1, collection_id: 1)
subscription2 = Subscription.create(feed_id: 2, collection_id: 1)

sport1 = Sport.create(title: "General")
sport2 = Sport.create(title: "Basketball")
sport3 = Sport.create(title: "Football")
sport4 = Sport.create(title: "Soccer")
sport5 = Sport.create(title: "Tennis")
sport6 = Sport.create(title: "Baseball")

SNOWBOARDING
http://snowboarding.transworld.net/feed/
http://www.grindtv.com/feed/
http://www.snowboarder.com/feed/

GOLF
http://rss.cnn.com/rss/edition_golf.rss
http://newsrss.bbc.co.uk/rss/sportonline_uk_edition/golf/rss.xml
http://www.skysports.com/rss/0,20514,12232,00.xml
http://www.golfdigest.com/rss
http://www.torontosun.com/sports/golf/rss.xml
