create table stocks (
	product_id uuid,
    count integer,
	foreign key ("product_id") references "products" ("id") on delete cascade
)
