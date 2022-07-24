import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import {productList} from '../productList';

export const getProductList = async () => {
  return formatJSONResponse({
    data: productList
  });
};

export const main = middyfy(getProductList);
