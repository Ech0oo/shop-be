import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import * as pg from '@libs/pg';

export const getProducts = async () => pg.getProducts()
    .then((products: pg.Product[]) =>  formatJSONResponse({
          data: products,
        })
  );

export const main = middyfy(getProducts);
