import "./sidebar.css";
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    //destructure pathname from location
    const { pathname } = location;
    //split to get path name of array
    const splitLocation = pathname.split("/");
    return (
        <div className="sidebar">
            <div className="top">
                <div className="logoWrapper">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <span className="logo">LOGO</span>
                    </Link>
                </div>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Dashboard</p>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <li className={splitLocation[1] ==="" ? "menu-active" : ""}>
                            <LineStyleOutlinedIcon className="icon" />
                            <span>Home</span>
                        </li>
                    </Link>
                    <li>
                        <TimelineOutlinedIcon className="icon" />
                        <span>Analytic</span>
                    </li>
                    <li>
                        <MovingOutlinedIcon className="icon" />
                        <span>Sales</span>
                    </li>
                    <p className="title">Quick Menu</p>
                    <Link to="/users" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <li className={splitLocation[1] ==="users" ? "menu-active" : ""}>
                            <PermIdentityOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <li>
                        <StorefrontOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <AttachMoneyOutlinedIcon className="icon" />
                        <span>Transactions</span>
                    </li>
                    <li>
                        <BarChartOutlinedIcon className="icon" />
                        <span>Reports</span>
                    </li>
                    <p className="title">Notificaions</p>
                    <li>
                        <EmailOutlinedIcon className="icon" />
                        <span>Mail</span>
                    </li>
                    <li>
                        <DynamicFeedOutlinedIcon className="icon" />
                        <span>Feedback</span>
                    </li>
                    <li>
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <span>Messages</span>
                    </li>
                    <p className="title">Staff</p>
                    <li>
                        <WorkOutlineOutlinedIcon className="icon" />
                        <span>Manage</span>
                    </li>
                    <li>
                        <TimelineOutlinedIcon className="icon" />
                        <span>Analytics</span>
                    </li>
                    <li>
                        <ErrorOutlinedIcon className="icon" />
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar