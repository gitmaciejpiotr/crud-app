import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Post from '../../views/Post/Post';
import { Link } from 'react-router-dom';

const Home = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div>
            <div className='d-flex justify-content-between mb-4'>
                <h3>All posts</h3>
                <Link to={"/post/add"} className="btn btn-outline-info">
                    Add post
                </Link>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-start gap-4 p-0'>
                {posts.map(post => <Post {...post} />)}
            </div>
        </div>
    );
};

export default Home;