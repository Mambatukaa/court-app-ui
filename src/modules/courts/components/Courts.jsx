import React from 'react';
import { List, FlexboxGrid, Icon, IconButton } from 'rsuite';
import { CourtForm } from '../containers';

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px'
};

const slimText = {
  fontSize: '0.666em',
  color: '#97969B',
  fontWeight: 'lighter',
  paddingBottom: 5
};

const titleStyle = {
  paddingBottom: 5,
  whiteSpace: 'nowrap',
  fontWeight: 500
};

function Courts(props) {
  const { allCourts, currentUser } = props;

  return (
    <List hover>
      {currentUser && currentUser.role === 'admin' ? (
        <div style={{ textAlign: 'right', margin: 20 }}>{<CourtForm />}</div>
      ) : null}
      {allCourts.map((item, index) => {
        return (
          <List.Item key={index} style={{ margin: 20 }}>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={2} style={styleCenter}>
                <img
                  style={{ width: 100, borderRadius: 10 }}
                  alt='zurag'
                  src={item.image}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item
                colspan={6}
                style={{
                  ...styleCenter,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  overflow: 'hidden'
                }}
              >
                <div style={titleStyle}>{item['name']}</div>
                <div style={slimText}>
                  <div>
                    <Icon icon='user-circle-o' />
                    {' ' + item['owner']}
                  </div>
                </div>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item
                colspan={4}
                style={{
                  ...styleCenter
                }}
              >
                {/*  <div style={{}}>{<CourtForm court={item} />}</div> */}
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        );
      })}
    </List>
  );
}

export default Courts;
