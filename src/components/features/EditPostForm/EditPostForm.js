import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router';
import PostForm from '../PostForm/PostForm';
import { getSelectedPost } from '../../../redux/postsRedux';


const EditPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const post = useSelector(state => getSelectedPost(state, params.id))[0];
    const handleSubmit = post => {
        dispatch(editPost({ id: params.id, ...post}));
        navigate('/');
    }

    if (!post) return <Navigate to="/" />
    else return (
        <PostForm
            action={handleSubmit}
            actionText="Edit post"
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            content={post.content} />
    );
};

export default EditPostForm;