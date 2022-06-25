//import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import About from './About';
import Home from './Home';
import AboutTeam from './AboutTeam';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Welcome2 children="WELCOME"/>
      <Button>Click Me</Button>
      <img className="img-sm" src="/logo512.png" alt="Gambar" /> */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<AboutTeam />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
