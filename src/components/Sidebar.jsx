import React, { useState } from "react";
import {
  FaHome,
  FaUserFriends,
  FaComments,
  FaVideo,
  FaPhone,
  FaCalendarAlt,
  FaBell,
  FaCog,
  FaInfoCircle,
  FaEnvelope,
  FaBars
} from "react-icons/fa";
import "./Sidebar.css";

const menuItems = [
  { id: 1, name: "Home", icon: <FaHome /> },
  { id: 2, name: "Family", icon: <FaUserFriends /> },
  { id: 3, name: "Messages", icon: <FaComments /> },
  { id: 4, name: "Video Call", icon: <FaVideo /> },
  { id: 5, name: "Voice Call", icon: <FaPhone /> },
  { id: 6, name: "Events", icon: <FaCalendarAlt /> },
  { id: 7, name: "Notifications", icon: <FaBell /> },
  { id: 8, name: "Settings", icon: <FaCog /> },
  { id: 9, name: "About", icon: <FaInfoCircle /> },
  { id: 10, name: "Inbox", icon: <FaEnvelope /> }
];

function Sidebar({ onSelect }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-header">
        <h2>{isOpen ? "Family Chat" : "FC"}</h2>
        <FaBars className="toggle-btn" onClick={toggleSidebar} />
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={activeMenu.id === item.id ? "active" : ""}
            onClick={() => {
              setActiveMenu(item);
              onSelect(item.name);
            }}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="text">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
