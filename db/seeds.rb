# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "demo@iSport.com", password: "password123")

collection1 = Collection.create!(title:"Basketball", user_id: user1.id)
collection2 = Collection.create!(title:"Golf", user_id: user1.id)
collection3 = Collection.create!(title:"Snowboarding", user_id: user1.id)
collection4 = Collection.create!(title:"Soccer", user_id: user1.id)

sport1 = Sport.create!(title: "General", image: "http://res.cloudinary.com/dh7hv7kkd/image/upload/v1490330270/general_e8zg3w.jpg")
sport2 = Sport.create!(title: "Basketball", image: "http://res.cloudinary.com/dh7hv7kkd/image/upload/v1490348105/william-stitt-111350_1_copy_p7icix.jpg")
sport3 = Sport.create!(title: "Winter Sports", image: "http://res.cloudinary.com/dh7hv7kkd/image/upload/v1490345963/johannes-waibel-4298_copy_jry8on.jpg")
sport4 = Sport.create!(title: "Soccer", image: "http://res.cloudinary.com/dh7hv7kkd/image/upload/v1490347474/abigail-keenan-17652_copy_nf3iyv.jpg")
sport5 = Sport.create!(title: "Baseball", image: "http://res.cloudinary.com/dh7hv7kkd/image/upload/v1490330929/baseball2_xvawkm.jpg")
sport6 = Sport.create!(title: "Golf", image: "http://res.cloudinary.com/dh7hv7kkd/image/upload/v1490346986/markus-spiske-99687_copy_zj0jta.jpg")

so1 = Feed.create!(url: "http://www.fifa.com/rss/index.xml",
  title: "FIFA.com",
  description: "The latest from FIFA.com",
  image: "http://www.logoopenstock.com/media/users/693/64847/raw/852b5446680016f6426bbe4fa50d8d72-fifa-vector-logo.jpg")

so2 = Feed.create!(url: "http://www.uefa.com/rssfeed/news/rss.xml",
  title: "UEFA.com",
  description: "The latest from UEFA.com - News",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/UEFA_logo.svg/1024px-UEFA_logo.svg.png")

so3 = Feed.create!(url: "http://feeds.feedburner.com/EuropeanNewsFootballNews?format=xml",
  title: "European News Football News",
  description: "News and Full Coverage of European News Football News",
  image: "http://logos-download.com/wp-content/uploads/2016/05/UEFA_Euro_2016_logo_France.png")

so4 = Feed.create(url: "http://www.espnfc.com/rss",
  title: "ESPN FC NEWS",
  description: "ESPN FC NEWS RSS FEED",
  image: "http://a.espncdn.com/combiner/i/?img=/wireless/alerts/smsSplash/fc/fcicon.png&amp;amp;w=110&amp;amp;h=110&amp;amp;scale=crop&amp;amp;site=espnfc%22")

so5 = Feed.create(url: "http://www.reddit.com/r/soccer/new.rss",
  title: "Reddit - Soccer",
  description: "",
  image: "http://www.1x2picks.com/wp-content/uploads/2017/01/1x2-reddit.png")


s1 = Feed.create!(url: "http://snowboarding.transworld.net/feed/",
  title: "Transworld SNOWboarding",
  description: "Snowboarding videos, gear, photos, resorts, and news",
  image: "https://www.google.com/search?q=snowboarding+transworld+logo&espv=2&source=lnms&tbm=isch&sa=X&ved=0ahUKEwic4aXy6e_SAhVJ3GMKHc88BnQQ_AUIBigB&biw=1581&bih=956&dpr=1#imgrc=Lrkrky0My1vifM")

s2 = Feed.create!(url: "http://www.grindtv.com/feed/",
  title: "GrindTV.come",
  description: "The worldwide leader in Adventure, Action Sports, Lifestyle, Travel. GrindTV - In Association with Yahoo! Sports.",
  image: "https://www.rankandstyle.com/media/images/g/grindtv_400x400.jpg")

s3 = Feed.create!(url: "http://www.snowboarder.com/feed/",
  title: "Snowboarder Magazine",
  description: "Snowboarding Gear, Riders &amp; Features, Snowboard Pictures and Videos",
  image: "https://s-media-cache-ak0.pinimg.com/736x/36/60/29/366029e24b8184a01af77deec32fac90.jpg")

s4 = Feed.create!(url: "http://www.skitiger.com/skireport.xml",
  title: "SkiTiger News",
  description: "SkiTiger",
  image: "http://www.skitiger.com/skitigerlogo.jpg")

g1 = Feed.create!(url: "http://rss.cnn.com/rss/edition_golf.rss",
  title: "CNN Golf",
  description: "CNN.com - RSS Channel - Sport - Golf",
  image: "http://i.cdn.turner.com/cnn/.e/img/3.0/global/misc/cnn-logo.png")

g2 = Feed.create!(url: "http://www.skysports.com/rss/0,20514,12232,00.xml",
  title: "SkySports | News",
  description: "US Tour Golf News",
  image: "http://sports24hour.com/wp-content/uploads/2015/10/sky-sports-broadcast-live-telecast-of-ram-slam-t20-online.png")

g3 = Feed.create!(url: "http://www.golfdigest.com/rss",
  title: "Golf Digest",
  description: "The latest from golfdigest.com",
  image: "https://cdn.spellbrand.com/wp-content/uploads/2011/03/Golf-Digest-logo-design.jpg")

g4 = Feed.create!(url: "http://www.torontosun.com/sports/golf/rss.xml",
  title: "The Toronto Sun - Golf",
  description: "Top Golf stories",
  image: "http://freethem.ca/wp-content/uploads/2013/07/sun-logo.jpg")

g5 = Feed.create!(url: "http://www.nbcbayarea.com/news/Bay-Area-Sports-361904231.html?summary=y&rss=y&embedThumb=y",
  title: "NBC Bay Area - Top News",
  description: "Bay Area News, Local News, Weather, Traffic, Entertainment, Breaking News",
  image: "https://hopetechschool.org/wp-content/uploads/2013/01/NBC_logo.png")

b1 = Feed.create!(url: "http://www.nba.com/knicks/rss.xml",
  title: "New York Knicks",
  description: "New York Knicks Team News",
  image: "http://www.michael-weinstein.com/wp-content/uploads/2015/03/knicks_logo4.png")

b2 = Feed.create!(url: "http://www.nba.com/cavaliers/rss.xml",
  title: "Cavaliers-Cleveland",
  description: "Cleveland Cavaliers Team News",
  image: "http://www.logoeps.com/wp-content/uploads/2012/10/cleveland-cavaliers-logo-vector.png")

b3 = Feed.create!(url: "http://www.nba.com/warriors/rss.xml",
  title: "Golden-State-Warriors",
  description: "Golden State Warriors Team News",
  image: "http://www.logoeps.com/wp-content/uploads/2012/12/golden-state-warriors-logo-vector.png")

b4 = Feed.create!( url: "http://www.nba.com/raptors/rss.xml",
  title: "Toronto Raptors",
  description: "Toronto Raptors Team News",
  image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Toronto_Raptors_logo_2015-16.png" )


b5 =Feed.create!(url: "http://www.nba.com/clippers/rss.xml",
  title: "LA Clippers",
  description: "Los Angeles Clippers Team News",
  image: "http://www.logoeps.com/wp-content/uploads/2012/12/los-angeles-clippers-logo-vector.png")

b6 = Feed.create!(url: "http://www.nba.com/bucks/rss.xml",
  title: "M",
  description: "Milwaukee Bucks Team News",
  image: "http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/bucks/150409-wallpaper-primary-1920x1080.jpg")

b7 = Feed.create!(url: "http://www.nba.com/lakers/rss.xml",
  title: "Los Angeles Lakers",
  description: "Los Angeles Lakers Team News",
  image: "http://www.thereviewsarein.com/wp-content/uploads/2014/11/LA-Lakers-Logo.png")

b8 = Feed.create!(url: "http://www.nba.com/rockets/rss.xml",
  title: "Houston Rockets",
  description: "Houston Rockets Team News",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1280px-Houston_Rockets.svg.png")

baseball1 = Feed.create(url: "http://mlb.mlb.com/partnerxml/gen/news/rss/col.xml",
  title: "COL Rockies",
  description: "COL Homepage News",
  image: "http://i930.photobucket.com/albums/ad144/2010Jake22/Rockies%20Uni%20Watch/logo.gif")

baseball2 = Feed.create(url: "http://mlb.mlb.com/partnerxml/gen/news/rss/sf.xml",
  title: "SF Giants",
  description: "SF Homepage News",
  image: "https://img.clipartfest.com/cac12864ec4baad045c69db159eaa065_sf-giants-logo-clipart-1-sf-giants-logo-clipart_1280-676.png")

baseball3 = Feed.create(url: "http://mlb.mlb.com/partnerxml/gen/news/rss/nyy.xml",
  title: "NY Yankies",
  description: "NYY Homepage News",
  image: "http://logok.org/wp-content/uploads/2015/02/New-York-Yankees-logo.png")

baseball4 = Feed.create(url: "http://mlb.mlb.com/partnerxml/gen/news/rss/la.xml",
  title: "LA Dodgers",
  description: "LAD Homepage News",
  image: "https://s-media-cache-ak0.pinimg.com/originals/84/d9/68/84d968704ba54c7ac249fb171a1d7b75.jpg")

baseball5 = Feed.create(url: "http://mlb.mlb.com/partnerxml/gen/news/rss/tex.xml",
  title: "TEX Rangers",
  description: "TEX Homepage News",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Texas_Rangers.svg/1200px-Texas_Rangers.svg.png")

baseball6 = Feed.create(url: "http://mlb.mlb.com/partnerxml/gen/news/rss/mil.xml",
  title: "MIL Brewers",
  description: "MIL Homepage News",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Milwaukee_Brewers_Logo.svg/1280px-Milwaukee_Brewers_Logo.svg.png")

ge1 = Feed.create!(url: "https://rss2json.com/#rss_url=http%3A%2F%2Fwww.sportsworldnews.com%2Frss%2Farchives%2Fall.xml",
  title: "Sports World News",
  description: "Top News RSS Feed",
  image: "https://pbs.twimg.com/profile_images/466596743170121729/1yY1CeHZ_400x400.png")

ge2 = Feed.create!(url: "http://www.espn.com/espn/rss/news",
  title: "ESPN",
  description: "Top News from EPSN",
  image: "http://logok.org/wp-content/uploads/2015/02/ESPN-logo-wordmark.png")

subscription1 = Subscription.create!(feed_id: b1.id, collection_id: collection1.id)
subscription2 = Subscription.create!(feed_id: b2.id, collection_id: collection1.id)
subscription3 = Subscription.create!(feed_id: so1.id, collection_id: collection4.id)
subscription4 = Subscription.create!(feed_id: so2.id, collection_id: collection4.id)
subscription5 = Subscription.create!(feed_id: b4.id, collection_id: collection1.id)
subscription6 = Subscription.create!(feed_id: g1.id, collection_id: collection2.id)
subscription7 = Subscription.create!(feed_id: g2.id, collection_id: collection2.id)



tagging1 = Tagging.create(feed_id: so1.id, sport_id: sport4.id)
tagging2 = Tagging.create(feed_id: so2.id, sport_id: sport4.id)
tagging3 = Tagging.create(feed_id: so3.id, sport_id: sport4.id)
Tagging.create(feed_id: so4.id, sport_id: sport4.id)
Tagging.create(feed_id: so5.id, sport_id: sport4.id)
tagging4 = Tagging.create(feed_id: g1.id, sport_id: sport6.id)
tagging5 = Tagging.create(feed_id: g2.id, sport_id: sport6.id)
tagging6 = Tagging.create(feed_id: g3.id, sport_id: sport6.id)
tagging7 = Tagging.create(feed_id: g4.id, sport_id: sport6.id)
Tagging.create(feed_id: g5.id, sport_id: sport1.id)
tagging8 = Tagging.create(feed_id: s1.id, sport_id: sport3.id)
tagging9 = Tagging.create(feed_id: s2.id, sport_id: sport3.id)
tagging10 = Tagging.create(feed_id: s3.id, sport_id: sport3.id)
Tagging.create(feed_id: s4.id, sport_id: sport3.id)
tagging11 = Tagging.create(feed_id: ge1.id, sport_id: sport1.id)
tagging12 = Tagging.create(feed_id: ge2.id, sport_id: sport1.id)
tagging13 = Tagging.create(feed_id: b1.id, sport_id: sport2.id)
tagging14 = Tagging.create(feed_id: b2.id, sport_id: sport2.id)
tagging15 = Tagging.create(feed_id: b3.id, sport_id: sport2.id)
tagging16 = Tagging.create(feed_id: b4.id, sport_id: sport2.id)
tagging17 = Tagging.create(feed_id: b5.id, sport_id: sport2.id)
tagging18 = Tagging.create(feed_id: b6.id, sport_id: sport2.id)
tagging19 = Tagging.create(feed_id: b7.id, sport_id: sport2.id)
tagging20 = Tagging.create(feed_id: baseball1.id, sport_id: sport5.id)
tagging21 = Tagging.create(feed_id: baseball2.id, sport_id: sport5.id)
tagging22 = Tagging.create(feed_id: baseball3.id, sport_id: sport5.id)
tagging23 = Tagging.create(feed_id: baseball4.id, sport_id: sport5.id)
tagging24 = Tagging.create(feed_id: baseball5.id, sport_id: sport5.id)
tagging25 = Tagging.create(feed_id: baseball6.id, sport_id: sport5.id)
tagging26 = Tagging.create(feed_id: b8.id, sport_id: sport2.id)
