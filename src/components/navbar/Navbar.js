import "./navbar.css";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import profile from "../../assets/avatar.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <Badge badgeContent={1} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={2} color="error">
              <LanguageOutlinedIcon />
            </Badge>
          </div>
          <div className="item">
            <SettingsOutlinedIcon />
          </div>
          <div className="item">
            <Avatar alt="Remy Sharp" src={profile} sx={{ width: 40, height: 40 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar