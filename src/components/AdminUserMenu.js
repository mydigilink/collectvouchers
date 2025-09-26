import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
export default function AdminUserMenu() {
  return (
    <>  <Link className="btn " title='Settings' aria-label='Settings' href="/admin/settings">
      
        <SettingsIcon />
      </Link>
       <div className="profiledrop dropdown text-sm">
      
      <button
        className="btn  dropdown-toggle d-flex align-items-center"
        type="button"
        id="userMenuDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <AccountCircleIcon />
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="userMenuDropdown">
        <li>
          <Link className="dropdown-item" href="#">
            Edit Profile
          </Link>
        </li>
        <li>
          <button className="dropdown-item" type="button" onClick={() => alert("Switch theme clicked")}>
            Theme
          </button>
        </li>
        <li>
          <Link className="dropdown-item" href="/api/admin/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
      </>
   
  );
}
