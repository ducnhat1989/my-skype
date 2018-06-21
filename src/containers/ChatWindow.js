import React from 'react';
import '../styles/ChatWindow.css';

import store from '../store';

import _ from 'lodash';

import Header from '../components/Header';
import Chats from '../containers/Chats';

const ChatWindow = ({ activeUserId }) => {
  const { contacts, messages } = store.getState();
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
    </div>
  );
};

export default ChatWindow;