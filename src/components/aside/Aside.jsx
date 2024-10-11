import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faEnvelope,
  faBox,
  faFileInvoice,
  faUsers,
  faComments,
  faCalendar,
  faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./aside.scss";

const menuArray = [
  { link: "home", name: "Home", icon: faHome },
  { link: "dashboard", name: "Dashboard", icon: faTachometerAlt },
  { link: "inbox", name: "Inbox", icon: faEnvelope },
  { link: "products", name: "Products", icon: faBox },
  { link: "invoices", name: "Invoices", icon: faFileInvoice },
  { link: "customers", name: "Customers", icon: faUsers },
  { link: "chatRoom", name: "Chat Room", icon: faComments },
  { link: "calendar", name: "Calendar", icon: faCalendar },
  { link: "helpCenter", name: "Help Center", icon: faQuestionCircle },
  { link: "setting", name: "Setting", icon: faCog },
];

export const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="aside__title">impekable</h2>

      <nav className="aside__menu">
        <ul className="menu__list">
          {menuArray.map((item, key) => (
            <li className="menu__list-item" key={key}>
              <Link to={item.link} className="item-link">
                <FontAwesomeIcon icon={item.icon} className="item-icon" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
