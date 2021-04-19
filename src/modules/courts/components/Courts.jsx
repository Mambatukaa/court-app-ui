import React from 'react';
import { List, FlexboxGrid, Icon } from 'rsuite';

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
  const { allCourts } = props;

  return (
    <List hover>
      {allCourts.map((item, index) => (
        <List.Item key={item['title']} index={index} style={{ margin: 15 }}>
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
              <a href='#'>View</a>
              <span style={{ padding: 5 }}>|</span>
              <a href='#'>Edit</a>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
      ))}
    </List>
  );
}

export default Courts;
