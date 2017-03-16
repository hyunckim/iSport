export const fetchFeed = (feed) => (
  $.ajax({
    method: "GET",
    url: `/api/feed/${feed.id}`,
  })
);
