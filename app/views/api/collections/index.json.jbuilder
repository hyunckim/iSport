@collections.each do |collection|
  json.set! collection.id do
    json.id collection.id
    json.feed collection.feeds, :id
    json.title collection.title
  end
end
