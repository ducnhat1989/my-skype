import React from 'react';
import '../styles/ChatWindow.css';

import store from '../store';

import _ from 'lodash';

import Header from '../components/Header';
import Chats from '../containers/Chats';
import MessageInput from '../containers/MessageInput';

const ChatWindow = ({ activeUserId }) => {
  const { contacts, messages, typing } = store.getState();
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;