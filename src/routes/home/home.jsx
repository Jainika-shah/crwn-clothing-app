import CategoryMenuList from '../../components/category-menu-list/category-menu-list';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Outlet />
        <CategoryMenuList />
    </div>
  );
}

export default Home;
