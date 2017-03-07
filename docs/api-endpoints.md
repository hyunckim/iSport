# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
  - #new
- `PATCH /api/users`
  - #create SignUp
### Session

- `GET /api/session`
  - #new
- `POST /api/session`
  - #create SignIn
- `DELETE /api/session`
  - #destroy LogOut

### Articles

- `GET /api/articles/:id`
  - #show

### Feeds

- `GET /api/feeds/:id`
  - #show
- `GET /api/feeds/:id/articles`
  - index of all articles for a feed

### Sports

- `GET /api/sports`
  - #index
- `GET /api/sports/:id`
  - #show
- `GET /api/sports/:id/feeds`
  - index of all feeds for a sport

### Collections

- `GET /api/collections`
  - #index
- `GET /api/collections/:id`
  - #show
- `POST /api/collections`
  - #create
- `PATCH /api/collections/:id`
  - #update
- `DELETE /api/collections/:id`
  - #destroy

### Subscriptions

- `GET /api/subscriptions`
  - #index
- `GET /api/subscriptions/:id`
  - #show
- `POST /api/subscriptions`
  - #create
- `DELETE /api/subscriptions/:id`
  - #destroy
