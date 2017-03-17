```js
{
  currentUser: {
    id: 1,
    email: "Hyun Chul Kim",
    collections: {
      2: {
        id: 2,
        title: "Baseball",
        feed_id: [],
      },
      ...
    }
  },
  errors: {
    signUp: [],
    logIn: [],
    collection: ["name can't be blank"],
    feed: ["url can't be blank"]
  },
  collections: {
    1: {
      id: 1,
      feed_id: [],
      title: "UCLA Basketball",
    }
  },
  feeds: {
    1: {
      id: 1,
      url: "epsn.com/college",
      title: "ESPN-college",
      description: "get the latest update on college sports",
      image: ""
      followers: {
        1: {
          id: 1,
          email: "Hyun Chul Kim"
        }
      },
      sports: {
        3: {
          id: 3,
          name: "Basketball"
        }
      }
    }
  },
  sports: {
    1: {
      id: 1,
      name: "Football"
    }
  }
}
```
