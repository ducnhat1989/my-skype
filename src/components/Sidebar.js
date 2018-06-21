import React from 'react';
import '../styles/Sidebar.css';

import User from './User';

const Sidebar = ({contacts}) => (
  <aside className="Sidebar">
    {
      contacts.map((contact) => (
        <User user={contact} key={contact.user_id} />
      ))
    }
  </aside>
);

export default Sidebar;