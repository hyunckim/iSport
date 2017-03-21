@collections.each do |collection|
  json.set! collection.id do
    json.id collection.id
    json.feeds collection.feeds.ids
    json.title collection.title
  end
end
