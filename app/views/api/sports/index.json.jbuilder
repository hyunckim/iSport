@sports.each do |sport|
  json.set! sport.id do
    json.id sport.id
    json.title sport.title
    json.feeds sport.feeds
    json.image asset_path(sport.image)
  end
end
