import React, { useState } from 'react';
import { Nav, Icon, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  const { currentUser, logout } = props;

  return (
    <Navbar {...props}>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          {currentUser ? (
            <Nav.Item icon={<Icon icon='star' />}>
              <Link style={{ color: 'white' }} to='/courts'>
                Заал
              </Link>
            </Nav.Item>
          ) : null}
          {currentUser?.role === 'admin' ? (
            <Nav.Item icon={<Icon icon='user' />}>
              <Link to='/users' style={{ color: 'white' }}>
                Хэрэглэгчид
              </Link>
            </Nav.Item>
          ) : null}
        </Nav>

        <Nav pullRight>
          {currentUser ? (
            <Nav.Item eventKey='logOut' icon={<Icon icon='sign-out' />}>
              <Link to='#sign-out' style={{ color: 'white' }} onClick={logout}>
                Гарах
              </Link>
            </Nav.Item>
          ) : (
            <Nav.Item
              eventKey='logIn'
              to='/sign-in'
              icon={<Icon icon='sign-out' />}
            >
              <Link to='/' style={{ color: 'white' }}>
                Нэвтрэх
              </Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

function Header(props) {
  const [activeKey, setActiveKey] = useState('home');

  function handleSelect(activeKey) {
    setActiveKey(activeKey);
  }

  return (
    <div
      className='nav-wrapper'
      style={{ position: 'fixed', zIndex: 1, width: '100%', top: 0 }}
    >
      <NavBarInstance
        logout={props.logout}
        currentUser={props.currentUser}
        appearance='inverse'
        activeKey={activeKey}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default Header;
