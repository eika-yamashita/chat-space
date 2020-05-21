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
|Colum|Type|Option|
|id|integer|primary_key: true|
|name|string|null: false|
|mail|string|null: false, unique: true|
|pass|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- hash_many :chats
- hash_many :groups

## chatテーブル
|Colum|Type|Option|
|id|integer|
|text|text|null: false|
|image|string|
|chat_id|integer|foreign_key: true|
### Association
- belong_to :user
- belong_to :group

## groupテーブル
|Colum|Type|Option|
|id|integer|primary_key: true|
|group_name|string|null: false|
|group_id|integer|foreign_key: true|
### Association
- hash_many :users
- hash_many :chat

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

