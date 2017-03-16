@feeds.each do |feed|
  json.set! feed.id do
    json.extract! feed, :id, :title, :description, :url
    json.image asset_path(feed.image)
  end
end
