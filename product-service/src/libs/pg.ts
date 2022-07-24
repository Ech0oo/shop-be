import { Client } from 'pg';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
const dbOptions = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USERNAME,
    password: PG_PASSWORD,
    ssl: {
        rejectUnauthorized: false
    },
    connectionTimeoutMillis: 5000
};



export interface Product {
    id: string,
    title: string,
    description: string,
    price: number,
    count: number
}

export const getProducts = async () : Promise<Array<Product> | string> => {
        const client = new Client(dbOptions);
        await client.connect();

        try {
            const result = await client.query('SELECT id, title, description, price, count FROM products LEFT JOIN stocks on products.id = stocks.product_id;');

            return result.rows;
        } catch(err) {
            console.log('sql error', err);
        } finally {
            client.end();
        }
}

export const getProductById = async (productId: number) : Promise<Array<Product> | string> => {
        const client = new Client(dbOptions);
        await client.connect();

        try {
            const result = await client.query(`SELECT id, title, description, price, count FROM products LEFT JOIN stocks on products.id = stocks.product_id WHERE products.id = '${productId}';`);

            return result.rows[0];
        } catch(err) {
            console.log('sql error', err);
        } finally {
            client.end();
        }
}

export const insertProduct = async (product: Product): Promise<string | void> => {
        const client = new Client(dbOptions);
        await client.connect();

        const {id, title, description, price, count} = product;

        try {
            await client.query(`INSERT INTO products (id, title, description, price) values ('${id}', '${title}', '${description}', ${price});`);

            await client.query(`INSERT INTO stocks (product_id, count) values ('${id}', ${count});`);

            return id;
        } catch(err) {
            console.log('sql error', err);
        } finally {
            client.end();
        }
    }
