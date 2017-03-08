```js
{
  currentUser: {
    id: 1,
    username: "Hyun Chul Kim"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCollection: {errors: ["name can't be blank"]},
    createFeed: {errors: ["url can't be blank"]}
  },
  collections: {
    1: {
      title: "UCLA Basketball",
      user_id: 1,
    }
  },
  feeds: {
    1: {
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
        1: {
          id: 3,
          name: "Basketball"
        }
      }
    }
  },
  feed_sports: {
    1: {
      feed_id: 1,
      sports_id: 3
    }
  },
  sports: {
    1: {
      name: "Football"
    }
  },
  subscriptions: {
    1: {
      feed_id: 1,
      user_id: 1
    }
  }
}
```
