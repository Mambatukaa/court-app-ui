import React, { useState } from 'react';
import { Button, Modal, DatePicker, Form } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import moment from 'moment';

const CourtSchedule = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const { addSchedule, loading, court } = props;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = values => {
    const { time } = values;

    addSchedule({
      courtId: court._id,
      startTime: time[0],
      endTime: time[1]
    });

    setIsModalVisible(false);
  };

  const { RangePicker } = DatePicker;

  return (
    <>
      <Button type='primary' icon={<PlusCircleOutlined />} onClick={showModal}>
        Цагийн хуваарь нэмэх
      </Button>
      <Modal
        title='Цагийн хуваарь'
        visible={isModalVisible}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <Form
          form={form}
          name='control-hooks'
          onFinish={onFinish}
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 14
          }}
          layout='horizontal'
        >
          {/*  <Form.Item label='Өдөр' name='day'>
            <DatePicker picker='day' />
          </Form.Item> */}

          <Form.Item label='Эхлэх цаг' name='time'>
            <RangePicker
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [
                  moment('00:00:00', 'HH:mm:ss'),
                  moment('11:59:59', 'HH:mm:ss')
                ]
              }}
              format='YYYY-MM-DD HH:mm'
            />
          </Form.Item>

          {/*    <Form.Item label='Дуусах цаг' name='endTime'>
            <TimePicker picker='hour' format={timeFormat} />
          </Form.Item>
 */}
          <Form.Item>
            <Button type='primary' htmlType='submit' loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CourtSchedule;
