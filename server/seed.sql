CREATE TABLE customers (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  name TEXT
)

CREATE TABLE food_items (
  id  INT PRIMARY KEY GENERATED ALWAYS AS identity,
  -- food_items_id INT references customers(id),
  food_name TEXT
);

CREATE TABLE customers_food_items(food_item_id INT REFERENCES customers(id),
customer_id INT REFERENCES food_items(id),
CONSTRAINT customers_food_items_pk PRIMARY KEY(food_item_id, customer_id));

INSERT INTO customers (name) VALUES ('Henry'), ('George'), ('Caitlyn'), ('Michelle'), ('Gemma');

INSERT INTO food_items (food_name) VALUES ('Pancakes'), ('French Toast'), ('Eggs Benedict'), ('Eggs Royale'), ('Eggs Florentine');

INSERT INTO customers_food_items (customer_id, food_item_id) VALUES (1,2), (2,3), (2,1), (3,4), (4,5), (4,2), (1,3)