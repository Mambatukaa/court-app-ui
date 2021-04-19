import React, { useState } from 'react';
import { Button, Modal, Form, Select, Input, InputNumber } from 'antd';
import { EditOutlined, UploadOutlined } from '@ant-design/icons';

const CourtForm = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type='primary' icon={<EditOutlined />} onClick={showModal}>
        Edit
      </Button>
      <Modal
        title='Заалын мэдээлэл'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Form
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 14
          }}
          layout='horizontal'
        >
          <Form.Item label='Нэр'>
            <Input />
          </Form.Item>
          <Form.Item label='Богино нэр'>
            <Input />
          </Form.Item>
          <Form.Item label='Цагийн үнэ'>
            <InputNumber />
          </Form.Item>

          <Form.Item label='Зураг'>
            <Input />
          </Form.Item>

          <Form.Item label='Зогсоол'>
            <Select>
              <Select.Option value='Байгаа'>Байгаа</Select.Option>
              <Select.Option value='Байгаа'>Байхгүй</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Анхааруулга'>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CourtForm;
