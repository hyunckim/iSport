# iSport

[iSport live][heroku]

[heroku]: https://feed-isport.herokuapp.com/

iSport is a full-stack web application inspired by Feedly, a RSS Feed Aggregator. Users can organize and explore feeds related to sports. This application was built using Ruby on Rails on the back-end, PostgreSQL as database, and React/Redux on the front-end.

## Features & Implementation

### RSS Feeds

When a user clicks on a feed, an AJAX request is called to an external api-endpoint to receive up-to-date feeds and returns parsed articles in JSON format. Users can then view each articles as a modal so that users can easily navigate through articles without losing their place. Users can save feeds to their collection. Users can also create their own RSS feeds with correct input of RSS url.

### Collections

Users can store their favorite feeds to their collection, and view all the articles in a collection in chronological order. Users can create a new collection.

### Sports

This sports themed Feed Aggregator accumulates different sports feeds in order to present a variety of sport categories. New users can easily navigate through the page and choose the sport that most appeals to them.

## Future Features

### Number of Hits per article

The Articles will include a read count column in the database, that increments each time an article is opened, allowing a read count to be displayed

### Users can Import Feeds from their Feedly account

Users can import feeds they have stored in their Feedly account via a Feedly API

### Users can mark feeds as read

An option  to mark a feed as read, with optional setting to hide them if marked as read.

[add_feeds]: ./app/assets/images/add_feeds.png
[add_to_collection]: ./app/assets/images/add_to_collection.png
[category]: ./app/assets/images/category.png
[search]: ./app/assets/images/search.png
[sidebar]: ./app/assets/images/sidebar.png
[reader]: ./app/assets/images/SimplyTech.png
