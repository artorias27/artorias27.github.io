import "./user.css";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Datatable from "../components/datatable/Datatable";

function Users() {
  return (
    <div className='users'>
        <Sidebar />
        <div className="userContainer">
          <Navbar />
          <Datatable />
        </div>
    </div>
  )
}

export default Users;