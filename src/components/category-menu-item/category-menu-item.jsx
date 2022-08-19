import { useNavigate } from 'react-router-dom';
import './category-menu-item.scss';

const CategoryMenuItem = ({category}) => {
    const { title, imageUrl, route } = category
    const navigate = useNavigate();

    const onNavigateHandler = () => { navigate(route) }
    return (
        <div className='category-container' onClick={onNavigateHandler}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})` }}></div>
            <div className='category-body-container'>
                <h2>{title.toUpperCase()}</h2>
                <p>Shop now</p>  
            </div>
        </div>
    )
}
export default CategoryMenuItem;