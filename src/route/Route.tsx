import OrderPage from '@pages/OrderPage';
import ProductPage from '@pages/ProductPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <ProductPage />,
	},
	{
		path: '/order',
		element: <OrderPage />,
	},
]);

const Route = () => <RouterProvider router={router} />;

export default Route;
