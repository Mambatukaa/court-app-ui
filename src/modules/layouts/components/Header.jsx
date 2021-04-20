import React, { useState } from 'react';
import { Nav, Icon, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  const { currentUser, logout } = props;

  return (
    <Navbar {...props}>
      <Navbar.Body>
        {currentUser ? (
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item icon={<Icon icon='home' />}>
              <Link style={{ color: 'white' }} to='/'>
                Заал
              </Link>
            </Nav.Item>
          </Nav>
        ) : null}

        <Nav pullRight>
          {currentUser ? (
            <Nav.Item
              eventKey='logOut'
              to='/sign-in'
              icon={<Icon icon='sign-out' />}
            >
              <Link style={{ color: 'white' }} onClick={logout}>
                Гарах
              </Link>
            </Nav.Item>
          ) : (
            <Nav.Item
              eventKey='logIn'
              to='/sign-in'
              icon={<Icon icon='sign-out' />}
            >
              <Link to='/sign-in' style={{ color: 'white' }}>
                Нэвтрэх
              </Link>
            </Nav.Item>
          )}
          {currentUser && currentUser.role === 'admin' ? (
            <Nav pullRight>
              <Nav.Item eventKey='logOut' icon={<Icon icon='plus-square' />}>
                Заал нэмэх
              </Nav.Item>
            </Nav>
          ) : null}
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
    <div className='nav-wrapper'>
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
