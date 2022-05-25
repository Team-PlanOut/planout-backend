# Schema Design

`pk` = Primary Key
`ref: >` = Many to one
`ref: <` = One to many
`ref: -` = One to one

## User Table

```
Table Users {
  id id [pk]
  email varchar(32) [not null, unique]
  first_name varchar(32) [not null]
  last_name varchar(32) [not null]
  points int
}
```

## Task Table

```
Table Tasks {
  id id [pk]
  description varchar(64) [not null]
  status boolean [not null]
  points int
  event_id [not null, fk]

}
```

## Event Info Table

```
Table Events {
  id id [pk]
  customer_id id [ref: > customer.id, not null]
  date_placed date [not null]
  date_shipped date
}
```

