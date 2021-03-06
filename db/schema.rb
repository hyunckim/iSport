# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170324011346) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collections", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_collections_on_user_id", using: :btree
  end

  create_table "feeds", force: :cascade do |t|
    t.string   "url",         null: false
    t.string   "title",       null: false
    t.text     "description", null: false
    t.string   "image"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["description"], name: "index_feeds_on_description", using: :btree
  end

  create_table "sports", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image"
    t.index ["title"], name: "index_sports_on_title", using: :btree
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer  "feed_id",       null: false
    t.integer  "collection_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["collection_id"], name: "index_subscriptions_on_collection_id", using: :btree
    t.index ["feed_id"], name: "index_subscriptions_on_feed_id", using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "feed_id",    null: false
    t.integer  "sport_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feed_id"], name: "index_taggings_on_feed_id", using: :btree
    t.index ["sport_id"], name: "index_taggings_on_sport_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", using: :btree
  end

end
