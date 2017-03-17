export const fetchFeed = (feed) => (
  $.ajax({
    method: "GET",
    url: `/api/feeds/${feed.id}`,
  })
);

export const fetchFeeds = () => (
  $.ajax({
    method: "GET",
    url: `/api/feeds`
  })
);

export const createFeed = (feed) => (
  $.ajax({
    method: "POST",
    url: `/api/feeds`,
    date: { feed }
  })
);
