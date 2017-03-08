# Schema Information

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, foreign key
user_id     | integer   | not null, foreign key

## feeds
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
title       | string    | not null
description | string    | not null
image       | string    |

## feed_sports
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key
sport_id    | integer   | not null, foreign key

## subscription(following feeds)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key
collect_id  | integer   | not null, foreign key

## sports
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | integer   | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
