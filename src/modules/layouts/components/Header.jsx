import React, { useState } from 'react';
import { Nav, Icon, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item icon={<Icon icon='home' />}>
            <Link style={{ color: 'white' }} to='/'>
              Заал
            </Link>
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon='sign-in' />}>
            <Link style={{ color: 'white' }} to='/sign-in'>
              Нэвтрэх
            </Link>
          </Nav.Item>
          <Nav.Item eventKey='logOut' icon={<Icon icon='sign-out' />}>
            <Link style={{ color: 'white' }} to='/sign-out'>
              Гарах
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

function Header() {
  const [activeKey, setActiveKey] = useState('home');

  function handleSelect(activeKey) {
    setActiveKey(activeKey);
  }

  return (
    <div className='nav-wrapper'>
      <NavBarInstance
        appearance='inverse'
        activeKey={activeKey}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default Header;
