export const fetchCollections = () => (
  $.ajax({
    method: "GET",
    url: `/api/collections`
  })
);

export const fetchCollection = (collectionId) => (
  $.ajax({
    method: "GET",
    url: `/api/collections/${collectionId}`,
  })
);

export const createCollection = (collection) => (
  $.ajax({
    method: "POST",
    url: `/api/collection`,
    data: { collection }
  })
);
