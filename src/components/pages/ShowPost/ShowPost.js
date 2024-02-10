import styles from './ShowPost.module.scss'
import clsx from 'clsx';
import { getSelectedPost, deletePost } from '../../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Modal from '../../views/DeleteModal/DeleteModal';
import { useState } from 'react';
import { Navigate } from 'react-router';


const ShowPost = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const post = useSelector(state => getSelectedPost(state, params.id))[0];
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const deleteSelectedPost = e => {
        e.preventDefault();
        dispatch(deletePost({ ...post }));
    }

    if (!post) return <Navigate to="/" />
    else return (
        <div className={clsx(styles.content, 'd-flex flex-row justify-content-around p-3 my-3')}>
            <div className={clsx(styles.postContent, 'd-flex flex-column my-3')}>
                <h3>{post.title}</h3>
                <div className='my-2'>
                    <b>Author:</b> {post.author} <br />
                    <b>Published:</b> {post.publishedDate}
                </div>
                <p>{post.content}</p>
            </div>
            <div className="buttons">
                <Link key={post.id} to={"/post/edit/" + post.id} className="btn btn-outline-info mx-1">
                    Edit
                </Link>
                <Link key={post.id} className="btn btn-outline-danger mx-1" onClick={handleShow}>
                    Delete
                </Link>
                <Modal show={show} handleClose={handleClose} handleDelete={deleteSelectedPost} />
            </div>
        </div>
    );
};

export default ShowPost;