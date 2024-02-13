import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <div className="d-flex justify-content-center">
      <div className="col-6">
        <h3>All categories</h3>
        <ul className='list-unstyled'>
          {categories.map(category => {
            const categoryName = category.name[0].toUpperCase() + category.name.slice(1);
            return <li className='border p-3'>
            <a href={"/category/" + category.name}>
              {categoryName}
            </a>
          </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;