import React, { useState } from 'react';
import { Button, Modal, DatePicker, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const CourtSchedule = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const { addSchedule, court } = props;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = values => {
    const { price, date, day } = values;

    addSchedule({
      courtId: court._id,
      day,
      startTime: date[0],
      endTime: date[1],
      price
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
        onOk={form.submit}
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
          <Form.Item label='Өдөр' name='day'>
            <DatePicker picker='day' />
          </Form.Item>

          <Form.Item label='Хугацаа' name='date'>
            <RangePicker
              showTime={{ format: 'HH:mm' }}
              format='YYYY-MM-DD HH:mm'
            />
          </Form.Item>

          <Form.Item label='Үнэ' name='price'>
            <Input type='number' style={{ width: 134 }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CourtSchedule;
