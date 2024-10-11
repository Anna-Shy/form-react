import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faQuestionCircle,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./header.scss";

export const Header = () => {
  const headerIconArray = [
    { link: "helpCenter", icon: faQuestionCircle },
    { link: "chatRoom", icon: faComments },
    { link: "notification", icon: faBell },
  ];

  return (
    <header className="header">
      <input
        className="header__search"
        type="text"
        placeholder="Search transactions, invoices or help"
      />

      <div className="header__icons">
        {headerIconArray.map((item, key) => (
          <Link to={item.link} key={key}>
            <FontAwesomeIcon icon={item.icon} />
            {item.name}
          </Link>
        ))}

        <div className="header__icons-account">
          <p className="account-text">John Doe</p>

          <div className="account-avatar">
            <img
              src="https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg?t=st=1728679747~exp=1728683347~hmac=890cf58705dea16fb54801894b4c45cc63c5043b52387f6fa7c2902175b5adb6&w=740"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
