export const fetchFeed = (feedId) => (
  $.ajax({
    method: "GET",
    url: `/api/feeds/${feedId}`,
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
    data: { feed }
  })
);
