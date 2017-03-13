
## Component Hierarchy

+ **AuthForm**

+ **App**
- *Sidebar*
  * CollectionContainer
    * CollectionIndex
      * CollectionIndexItem
- *HomePage*
  * FeedContainer
    * FeedIndex
      * FeedIndexItem
  * SportsContainer
    * SportsIndex
      * SportsIndexItem
  * SubscriptionContainer
    * SubscriptionIndex
      * SubscriptionIndexItem
- *ArticlePage*
  * FeedDetail
  * ArticleDetail
- *AddFeedSidebar*
  * AddFeedForm
- *Search-bar*

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "App" |
| "/collection/" | "CollectionIndex" |
| "/collection/:collectionId" | "CollectionIndexItem" |
| "/collection/:collectionId/feed/:feedId" | "SubscriptionFeedItem" |
| "/sports" | "SportsIndex" |
| "/sports/:sportsId" | "SportsIndexItem" |
| "/feed" | "FeedIndex" |
| "/feed/:feedId" | "FeedIndexItem" |
| "/feed/:feedId/:articleId" | "ArticleDetail" |
| "/new-collection" | "NewCollection" |
| "/new-feed" | "NewFeed" |
