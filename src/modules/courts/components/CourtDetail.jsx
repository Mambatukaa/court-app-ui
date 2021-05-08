import React from 'react';
import { List, Button } from 'antd';
import dayjs from 'dayjs';

import CourtScheduleForm from './CourtScheduleForm';

const CourtDetail = props => {
  const { courtDetail, addSchedule, deleteSchedule } = props;
  const { courtSchedule } = courtDetail;

  const handleOk = item => {
    deleteSchedule(item);
  };

  return (
    <div style={{ margin: 20, marginTop: 80 }}>
      {<CourtScheduleForm court={courtDetail} addSchedule={addSchedule} />}
      <List
        itemLayout='horizontal'
        dataSource={courtSchedule}
        renderItem={item => {
          return (
            <List.Item
              style={{
                border: 'solid',
                borderWidth: 0.6,
                padding: 5,
                margin: 5
              }}
            >
              <List.Item.Meta
                title={<p>{dayjs(item.startTime).format('YYYY-MM-DD')}</p>}
                description={`${dayjs(item.startTime).format(
                  'HH:mm'
                )} ==> ${dayjs(item.endTime).format('HH:mm')}\n ${item.price}₮`}
              />
              <div>
                <Button type='primary' onClick={() => handleOk(item)}>
                  Устгах
                </Button>
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default CourtDetail;
