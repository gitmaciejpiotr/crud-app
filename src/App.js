import About from './components/pages/About/About'
import AddPostSite from './components/pages/AddPostSite/AddPostSite'
import EditPostForm from './components/pages/EditPostForm/EditPostForm'
import Home from './components/pages/Home/Home'
import ShowPost from './components/pages/ShowPost/ShowPost'
import Footer from './components/views/Footer/Footer'
import Header from './components/views/Header/Header'
import PageNotFound from './components/pages/PageNotFound/PageNotFound'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<ShowPost />} />
        <Route path="/post/add" element={<AddPostSite />} />
        <Route path="/post/edit/:id" element={<EditPostForm />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
