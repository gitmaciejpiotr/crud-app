import styles from './Post.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Post = props => {
    return (
        <div className={clsx(styles.content, 'p-3 border my-3')}>
            <h3>{props.title}</h3>
            <div className='my-2'>
                <b>Author:</b> {props.author} <br />
                <b>Published:</b> {props.publishedDate}
            </div>
            <p>{props.shortDescription}</p>
            <Link key={props.id} to={"/post/" + props.id} className="btn btn-primary">
                Read more
            </Link>
        </div>
    )
};

export default Post;