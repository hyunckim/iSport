export const fetchSports = () => (
  $.ajax({
    method: "GET",
    url: "/api/sports",
  })
);
