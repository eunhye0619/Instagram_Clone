import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Instagram,
  Home,
  Search,
  Compass,
  Film,
  Send,
  Heart,
  PlusSquare,
  User
} from 'lucide-react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink to="/" className="icon-link">
          <Instagram size={28} />
        </NavLink>
      </div>

      <NavLink to="/" className="icon-link">
        <Home size={24} />
      </NavLink>
      <NavLink to="/explore" className="icon-link">
        <Compass size={24} />
      </NavLink>
      <NavLink to="/profile" className="icon-link">
        <User size={24} />
      </NavLink>
    </div>
  );
}

export default Sidebar;
