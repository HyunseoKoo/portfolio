import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import MainPage from '../Pages/Main';

const router = createBrowserRouter([
    {

        element: (
            <Layout />
        ),
        children: [
            {
                path: '',
                element: <MainPage />
            }
        ]
    },
]);

export default router;