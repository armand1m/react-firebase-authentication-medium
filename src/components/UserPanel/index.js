import React from 'react';
import './index.css';

const UserPanel = ({ user, signOut }) => (
  <div className="user-panel">
    <img className="user-photo" src={user.photoURL} alt='url_foto' />
    <p>Hello, {user.displayName}</p>
    <p className="minitext">Logged with {(user.providerData[0].providerId)}</p>
    <button onClick={signOut}>Sign out</button>
  </div>
);

export default UserPanel;
