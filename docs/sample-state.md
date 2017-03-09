```js
{
  currentUser: {
    id: 1,
    username: "Hyun Chul Kim",
    collections: {
      2: {
        id: 2,
        title: "Baseball"
        feeds: {
          2: {
            id: 2,
            url: "mlb.com",
            title: "Major League Baseball",
            description: "The Official Site of Major League Baseball.",
            image: ""
          },
          ...
        }
      },
      ...
    }
  },
  errors: {
    signUp: [],
    logIn: [],
    createCollection: ["name can't be blank"],
    createFeed: ["url can't be blank"]
  },
  collections: {
    1: {
      id: 1,
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
          username: "Hyun Chul Kim"
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
