# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
  - #create Sign Up

### Session

- `POST /api/session`
  - #create SignIn
- `DELETE /api/session`
  - #destroy LogOut

### Feeds

- `GET /api/feeds/:id`
  - #show
- `GET /api/feeds`
  - #index
- `POST /api/feeds`
  - #create

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
- `GET /api/collections/:id/edit`
  - #edit
- `POST /api/collections`
  - #create
- `PATCH /api/collections/:id`
  - #update
- `DELETE /api/collections/:id`
  - #destroy

### Subscriptions

- `POST /api/subscriptions`
  - #create
- `DELETE /api/subscriptions/:id`
  - #destroy
