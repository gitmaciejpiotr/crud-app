import styles from './EditPostSite.module.scss'
import { Container } from 'react-bootstrap';
import clsx from 'clsx';
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const EditPostSite = () => {
  return (
    <Container className='d-flex justify-content-center'>
      <div className={clsx(styles.content)}>
        <EditPostForm />
      </div>
    </Container>
  );
};

export default EditPostSite;