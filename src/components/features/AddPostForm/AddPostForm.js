import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPubDate] = useState('');
  const [shortDescription, setShortDesc] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title, shortDescription, content, publishedDate, author }));
    navigate('/');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" onChange={e => setAuthor(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" placeholder="Enter date" onChange={e => setPubDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Leave a description here" onChange={e => setShortDesc(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Leave main content here" onChange={e => setContent(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPostForm;