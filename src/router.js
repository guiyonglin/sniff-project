import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Banner from './pages/banner'

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
    },{
        path: '/marketing/banner',
        title: 'dev-login',
        component: (props) => (
            <Banner {...props} />
        )
    },
]