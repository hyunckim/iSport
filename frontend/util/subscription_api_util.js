export const subscribe = (subscription) => (
  $.ajax({
    method: "POST",
    url: "/api/subscriptions",
    data: { subscription }
  })
);
