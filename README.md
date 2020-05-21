# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|primary_key: true|
|name|string|null: false|
|mail|string|null: false, unique: true|
|pass|string|null: false|
### Association
- hash_many :chats
- hash_many :groups, through: :groups_users
- hash_many :groups_users

## chatテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|
|text|text|
|image|string|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
### Association
- belong_to :user
- belong_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|primary_key: true|
|name|string|null: false|
### Association
- hash_many :users, through: :groups_users
- hash_many :chats
- hash_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

