import Home from './pages/home';
import Dashboard from './pages/dashboard';

export const routers = [
    {
        path: '/marketing/home',
        title: 'dev-login',
        component: (props) => (
            <Home {...props} />
        )
    },
    {
        path: '/marketing/dashboard',
        title: '首页',
        component: () => (
            <Dashboard />
        )
    },
]