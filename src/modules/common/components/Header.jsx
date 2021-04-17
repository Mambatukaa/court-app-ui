import React, { useState } from 'react';
import { Nav, Icon, Navbar, Dropdown } from 'rsuite';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item eventKey='1' icon={<Icon icon='home' />}>
            Заал
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
          <Nav.Item icon={<Icon icon='sign-out' />}>Гарах</Nav.Item>
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
