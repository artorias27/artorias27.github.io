import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="textContainer">
          <Link to="/users" style={{ textDecoration: 'none', color: 'inherit' }} >
            <Typography variant="h2" color="text.secondary">
              Click This Text To Go To Users Menu
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home