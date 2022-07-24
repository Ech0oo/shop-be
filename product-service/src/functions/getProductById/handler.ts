import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import * as pg from '@libs/pg';

export const getProductById = async (event) => {
  const { productId } = event.pathParameters;

  return pg.getProductById(productId)
      .then((product) => {

        if (!product) {
          throw new Error('Product not found')
        }

        // todo: define fix type of product
        return formatJSONResponse(product as any);
      })
      .catch((error) => formatJSONResponse({'error': error.message}));
}


export const main = middyfy(getProductById);
