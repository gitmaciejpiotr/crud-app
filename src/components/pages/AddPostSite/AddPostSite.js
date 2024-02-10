import styles from './AddPostSite.module.scss'
import { Container } from 'react-bootstrap';
import clsx from 'clsx';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const AddPostSite = () => {
  return (
    <Container className='d-flex justify-content-center'>
      <div className={clsx(styles.content)}>
        <h3>AddPostForm</h3>
        <AddPostForm />
      </div>
    </Container>
  );
};

export default AddPostSite;