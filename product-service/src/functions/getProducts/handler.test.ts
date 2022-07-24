import { getProducts } from './handler';
import { products } from '../products';

jest.mock('@libs/api-gateway', () => ({
    formatJSONResponse: (arg) => arg
}));

jest.mock('@libs/lambda', () => ({
    middyfy: (arg) => arg
}));

describe('getProducts', () => {
    it('should return products', async () => {
        // Act
        const result: any = await getProducts();

        console.log('result', result);

        // Assert
        expect(result.data).toEqual(products);
    });
});
