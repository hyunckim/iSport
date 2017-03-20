json.set! @collection.id do
  json.id @collection.id
  json.array! @collection, :feed_id
  json.title @collection.title
end
