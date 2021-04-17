import React from 'react';
import { Container, Content, Footer } from 'rsuite';
import Header from './Header';

function MainLayout() {
  return (
    <div className='show-fake-browser navbar-page'>
      <Container>
        <Header />
        {/* <Content>Content</Content>
          <Footer>Footer</Footer> */}
      </Container>
    </div>
  );
}

export default MainLayout;
