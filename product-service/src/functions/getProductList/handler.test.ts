import { getProductList } from './handler';
import { productList } from '../productList';

jest.mock('@libs/api-gateway', () => ({
    formatJSONResponse: (arg) => arg
}));

jest.mock('@libs/lambda', () => ({
    middyfy: (arg) => arg
}));

describe('getProductList', () => {
    it('should return productList', async () => {
        // Act
        const result: any = await getProductList();

        console.log('result', result);

        // Assert
        expect(result.data).toEqual(productList);
    });
});
