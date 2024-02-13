import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postsRedux';
import Post from '../../views/Post/Post';
import { useParams } from 'react-router-dom';

const Home = () => {
    const params = useParams();
    const posts = useSelector(state => getPostsByCategory(state, params.name));

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h3>Category: {params.name}</h3>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-start gap-4 p-0'>
                {posts.map(post => <Post {...post} />)}
            </div>
        </div>
    );
};

export default Home;