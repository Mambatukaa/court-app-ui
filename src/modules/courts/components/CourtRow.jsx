import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { List, FlexboxGrid, Icon } from 'rsuite';
import CourtForm from './CourtForm';

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

const CourtRow = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { court, remove } = props;

  const item = court;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = e => {
    remove(court._id);

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <List.Item style={{ margin: 20 }}>
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
          <div style={{ textAlign: 'right', margin: 20 }}>
            {<CourtForm court={court} btnTxt={'Засах'} />}
          </div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item
          colspan={11}
          style={{
            ...styleCenter
          }}
        >
          <Button type='primary' onClick={showModal}>
            Устгах
          </Button>
          <Modal
            title='Заал устгах'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Устгахдаа итгэлтэй байна уу?</p>
          </Modal>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </List.Item>
  );
};

export default CourtRow;
