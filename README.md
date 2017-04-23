# iSport

[iSport live][heroku]

[heroku]: https://feed-isport.herokuapp.com/

iSport is a full-stack web application inspired by Feedly, a RSS Feed Aggregator.
Users can organize and explore feeds related to sports. iSport was built
using Ruby on Rails on the back-end, PostGREs as database, and React/Redux
on the front-end.

## Features & Implementation

### RSS Feeds

When a user clicks on a feed, an ajax request is called to an external api-endpoint and returns parsed articles in json format. Users can then view each articles as a modal so that users can easily navigate through articles without losing their place. Users can save feeds to their collection. Users can also create their own RSS feeds with correct input of RSS url.

### Collections

Users can store their favorite feeds to their collection, and view all the articles in a collection in chronological order. Users can create a new collection.

### Sports

This sports themed Feed Aggregator accumulates different sports feeds in order to present a variety of sport categories. New users can easily navigate through the page and choose the sport that most appeals to them.
