# Schema Design

`pk` = Primary Key
`fk` = Foreign Key
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
  user_id [fk]
  cost int

}
```

## Event Info Table

```
Table Events {
  id id [pk]
  event_name varchar(64) [not null] 
  date date [not null]
  budget int 
  member [fk, not null]
  host [fk, not null]
}
```

