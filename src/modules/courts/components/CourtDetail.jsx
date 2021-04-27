import React, { useState } from 'react';
import { List, Modal, Button } from 'antd';
import dayjs from 'dayjs';

import CourtScheduleForm from './CourtScheduleForm';

const CourtDetail = props => {
  const { courtDetail, addSchedule, deleteSchedule } = props;
  const { courtSchedule } = courtDetail;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = item => {
    deleteSchedule(item);

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ margin: 20 }}>
      {<CourtScheduleForm court={courtDetail} addSchedule={addSchedule} />}
      <List
        itemLayout='horizontal'
        dataSource={courtSchedule}
        renderItem={item => (
          <List.Item
            style={{ border: 'solid', borderWidth: 0.6, padding: 5, margin: 5 }}
          >
            <List.Item.Meta
              title={<h6>{dayjs(item.day).format('YYYY-MM-DD')}</h6>}
              description={`${dayjs(item.startTime).format(
                'HH:mm'
              )} ==> ${dayjs(item.endTime).format('HH:mm')}\n ${item.price}₮`}
            />
            <div>
              <Button type='primary' onClick={showModal}>
                Устгах
              </Button>
              <Modal
                title='Цагийн хуваарь устгах'
                visible={isModalVisible}
                onOk={() => {
                  handleOk(item);
                }}
                onCancel={handleCancel}
              >
                <p>Устгахдаа итгэлтэй байна уу?</p>
              </Modal>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CourtDetail;
