// import App from './containers/App';
import HomePage from './components/HomePage';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
// IndexRoute maps HomePage component to the default route
const routes = [
  {
    path:"/home",
    component:HomePage
  }
]
export default routes;