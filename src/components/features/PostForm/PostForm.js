import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>{actionText}</h3>
      <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={author} placeholder="Enter author" onChange={e => setAuthor(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" value={publishedDate} placeholder="Enter date" onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" value={shortDescription} style={{ height: '100px' }} placeholder="Leave a description here" onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" value={content} style={{ height: '100px' }} placeholder="Leave main content here" onChange={e => setContent(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.string,
  actionText: PropTypes.string,
};

export default PostForm;