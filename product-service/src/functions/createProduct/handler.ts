import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import * as pg from '@libs/pg';

export const createProduct = async (product: pg.Product) => pg.insertProduct(product)
    .then((productId) => formatJSONResponse({id: productId}))

export const main = middyfy(createProduct);
