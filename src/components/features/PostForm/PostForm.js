import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';


const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const categories = useSelector(getAllCategories);


  return (
    <Form onSubmit={validate(handleSubmit)}>
      <h3>{actionText}</h3>
      <Form.Group className="mb-3 col-5">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={e => setTitle(e.target.value)} />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-5">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          type="text"
          value={author}
          placeholder="Enter author"
          onChange={e => setAuthor(e.target.value)} />
        {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-5">
        <Form.Label>Published</Form.Label>
        <DatePicker selected={publishedDate} dateFormat='d/M/yyyy' onChange={e => setPublishedDate(e)} />
        {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-5">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example"
          {...register("category", { required: true })}>
          <option value=""></option>
          {categories.map(category => <option value={category.name}>{category.name}</option>)}
        </Form.Select>
        {errors.category && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea"
          value={shortDescription}
          style={{ height: '100px' }}
          placeholder="Leave a description here"
          onChange={e => setShortDescription(e.target.value)} />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Title is too short (min is 20)</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Main content</Form.Label>
        <ReactQuill as="textarea" className='mb-5' value={content} style={{ height: '100px' }} placeholder="Leave main content here" theme="snow" onChange={e => setContent(e)} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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