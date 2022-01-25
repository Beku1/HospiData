import { HomePage } from './pages/home-page.jsx';


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/about',
        component: HomePage,
        label: 'About',
    },
    {
        path: '/news',
        component: HomePage,
        label: 'News',
    },
    {
        path: '/contact',
        component: HomePage,
        label: 'Contact',
    },
];

export default routes;
