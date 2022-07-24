import { createProduct } from './handler';
import { products } from '../products';

jest.mock('@libs/api-gateway', () => ({
    formatJSONResponse: (arg) => arg
}));

jest.mock('@libs/lambda', () => ({
    middyfy: (arg) => arg
}));

describe('addProduct', () => {
    it('should return products', async () => {
        // Arrange
        const product = {
            "count": 15,
            "description": "Short Product Description3",
            "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
            "price": 10,
            "title": "ProductNew"
        }

        // Act
        const result: any = await createProduct(product);

        // Assert
        expect(result.data).toEqual(products);
    });
});
