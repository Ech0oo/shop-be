create extension if not exists "uuid-ossp";

create table products (
	id uuid primary key default uuid_generate_v4(),
	title text not null,
	description text,
	price integer
)
