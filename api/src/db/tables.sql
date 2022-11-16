create table "user" (
  email varchar(100) primary key,
  pass varchar(50) not null,
  -- defaults
  created timestamp default now() not null,
  updated timestamp default now() not null,
);
create type "chat" (
  -- core
  title varchar(80),
  owner_id int not null,
  constraint "owner" foreign key (owner_id) references "user"(id),
  public boolean default true not null,
  -- defaults
  id varchar(20) primary key,
  created timestamp default now() not null,
  updated timestamp default now() not null,
);
-- message_type = text or audio
create type "message_type" as enum ('t', 'a');
create table "message" (
  -- core
  type message_type default 't',
  user_id int not null,
  constraint "user" foreign key (user_id) references "user"(id),
  chat_id int not null,
  constraint "chat" foreign key (chat_id) references "chat"(id),
  reply int,
  constraint "reply" foreign key (reply) references "message"(id),
  -- defaults
  id varchar(20) primary key,
  created timestamp default now() not null,
  updated timestamp default now() not null,
);