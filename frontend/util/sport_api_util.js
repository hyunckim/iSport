export const fetchSports = () => (
  $.ajax({
    method: "GET",
    url: "/api/sports",
  })
);

export const fetchSport = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/sports/${id}`
  })
);
