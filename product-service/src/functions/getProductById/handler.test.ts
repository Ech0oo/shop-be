import { getProductById } from './handler';
import { products } from '../products';

jest.mock('@libs/api-gateway', () => ({
    formatJSONResponse: (arg) => arg
}));

jest.mock('@libs/lambda', () => ({
    middyfy: (arg) => arg
}));

describe('getProductById', () => {
    it('should return product', async () => {
        // Arrange
        const event = {
            pathParameters: {
                productId: products[0].id
            }
        }

        // Act
        const product: any = await getProductById(event);


        // Assert
        expect(product).toEqual(products[0]);
    });

    it('should return error', async () => {
        // Arrange
        const event = {
            pathParameters: {
                productId: 'no id'
            }
        }

        // Act
        const { error }: any = await getProductById(event);


        // Assert
        expect(error).toBe('Product not found');
    });
});
