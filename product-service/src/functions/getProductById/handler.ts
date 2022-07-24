import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { productList } from '../productList';

export const getProductById = async (event) => {
  try {
    const { productId } = event.pathParameters;

    const product = productList.find((item) => item.id === productId)

    if (!product) {
      throw new Error('Product not found')
    }

    return formatJSONResponse(product);
  } catch (error) {
    return formatJSONResponse({'error': error.message});
  }
};

export const main = middyfy(getProductById);
