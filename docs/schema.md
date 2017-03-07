# Schema Information

## articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key
title       | string    | not null
link        | string    | not null
published   | datetime  | not null
image       | string    |

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
article_id  | integer   | not null, foreign key
user_id     | integer   | not null, foreign key

## feeds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
title       | string    | not null
description | string    | not null
sport_id    | integer   | not null, foreign key
image       | string    |

## sports
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_name       | integer   | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique