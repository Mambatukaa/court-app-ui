import React, { useState } from 'react';
import { Nav, Icon, Navbar, Dropdown } from 'rsuite';
import { Link, BrowserRouter } from 'react-router-dom';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <BrowserRouter>
      <Navbar {...props}>
        <Navbar.Body>
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item eventKey='1' icon={<Icon icon='home' />}>
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item eventKey='2'>News</Nav.Item>
            <Nav.Item eventKey='3'>Products</Nav.Item>
            <Dropdown title='About'>
              <Dropdown.Item eventKey='4'>Company</Dropdown.Item>
              <Dropdown.Item eventKey='5'>Team</Dropdown.Item>
              <Dropdown.Item eventKey='6'>Contact</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item eventKey='logOut' icon={<Icon icon='sign-out' />}>
              <Link to='/sign-in'>Гарах</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </BrowserRouter>
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
