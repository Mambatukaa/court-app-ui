import React from 'react';
import { List, FlexboxGrid, Icon } from 'rsuite';

const data = [
  {
    title: 'Монгол Улсын Их Сургууль',
    icon: 'image',
    creator: 'Муис'
  },
  {
    title: 'Celebration of the Mid-Autumn festival',
    icon: 'image',
    creator: 'Daibiao'
  }
];
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

function Courts() {
  return (
    <List hover>
      {data.map((item, index) => (
        <List.Item key={item['title']} index={index}>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={2} style={styleCenter}>
              <img
                style={{ width: 100, borderRadius: 10 }}
                alt='zurag'
                src='https://www.nba.com/resources/static/team/v2/heat/custom-projects/2018-19_Uniforms/imgs/vice-nights-court-1.jpg'
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
              <div style={titleStyle}>{item['title']}</div>
              <div style={slimText}>
                <div>
                  <Icon icon='user-circle-o' />
                  {' ' + item['creator']}
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
