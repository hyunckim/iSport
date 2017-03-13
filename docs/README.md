# iSport
### [Heroku](https://herokuapp.com/)

## Minimum Viable Product

iSport is a RSS web application inspired by Feedly, built using Ruby on Rials and React/Redux. By the end of week 9, this app, at minimum will satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] A production README
- [ ] New account creation, login, and guest/demo login
- [ ] Feeds
  - [ ] Users can create new feeds
  - [ ] Users can view articles
  - [ ] Articles will be auto-populated using RSS feed
- [ ] Sports
  - [ ] Feeds are tagged by sports
- [ ] Collections
  - [ ] Users can create a new collection
  - [ ] Users can subscribe/follow feeds and add to collections
  - [ ] Can view a collection which shows all subscribed feeds of collection
- [ ] Search
  - [ ] Search bar will auto-populate matching feeds
- [ ] Bonus
  - [ ] Shows number of unread articles in the feed
  - [ ] Users can save their favorite articles

  ## Design Docs
  * [View Wireframes][wireframes]
  * [React Components][components]
  * [API endpoints][api-endpoints]
  * [DB schema][schema]
  * [Sample State][sample-state]

  [wireframes]: docs/wireframes
  [components]: docs/component-hierarchy.md
  [sample-state]: docs/sample-state.md
  [api-endpoints]: docs/api-endpoints.md
  [schema]: docs/schema.md

  ## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end authentication

### Phase 2: RSS feeds - Model, API, Components (3 days)

**Objective:** Feeds can be fetched, added and assigned to multiple sports.

### Phase 3: Collections and Subscriptions (1 day)

**Objective:** User can create and delete customize collections to store subscribed feeds

### Phase 4: Sidebar (1 day)

**Objective:** Functioning sidebar. User can navigate to collections or discover new feeds

### Phase 5: Styling and Seeds (2 days)

**Objective:** Improve styling details and make the website feel cohesive.

### Bonus Features (TBD)
- [ ] User customizable CSS depending on favorite sports team.
- [ ] User can save articles to read later.
- [ ] User can see number of unread articles for each feed.
