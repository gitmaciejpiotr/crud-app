import styles from './Home.module.scss'
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Post from '../../views/Post/Post';
import { Link } from 'react-router-dom';

const Home = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div className={styles.content}>
            <div className='d-flex justify-content-between'>
                <h3>All posts</h3>
                <Link to={"/post/add"} className="btn btn-outline-info">
                    Add post
                </Link>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-between p-0'>
                {posts.map(post => <Post
                    id={post.id}
                    title={post.title}
                    shortDescription={post.shortDescription}
                    content={post.content}
                    publishedDate={post.publishedDate}
                    author={post.author} />)}
            </div>
        </div>
    );
};

export default Home;