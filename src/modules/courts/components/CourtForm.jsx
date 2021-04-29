import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, InputNumber } from 'antd';

import { PlusCircleOutlined } from '@ant-design/icons';

const CourtForm = props => {
  const [form] = Form.useForm();

  const court = props.court || {};

  const [data, setData] = useState({
    name: court.name || '',
    ownerId: '',
    image: court.image || '',
    slotSize: court.slotSize || 15,
    description: court.description || '',
    warning: court.warning || '',
    parking: court.parking || '',
    courtDetail: court.courtDetail || '',
    lat: '',
    lng: ''
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { addCourt, editCourt, allUsers = [], currentUser } = props;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = e => {
    e.preventDefault();

    addCourt(data);

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  /* const onEdit = values => {
    editCourt(court._id, values);
  }; */

  const onFinish = values => {
    addCourt(values);

    setIsModalVisible(false);
  };

  const { Option } = Select;
  return (
    <>
      <Button type='primary' icon={<PlusCircleOutlined />} onClick={showModal}>
        {props.btnTxt}
      </Button>
      <Modal
        title='Заал нэмэх'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={false}
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
          {currentUser?.role === 'admin' ? (
            <Form.Item
              label='Заалны менежер'
              name='ownerId'
              initialValue={data.ownerId}
            >
              <Select style={{ width: 150 }}>
                {allUsers.map((el, index) => {
                  return (
                    <Option key={index} value={el._id}>
                      {el.username}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          ) : null}

          <Form.Item label='Нэр' name='name' initialValue={data.name}>
            <Input required />
          </Form.Item>

          <Form.Item
            label='Хүний хэмжээ'
            name='slotSize'
            initialValue={data.slotSize}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item label='Зураг' name='image' initialValue={data.image}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Анхааруулга'
            name='warning'
            initialValue={data.warning}
          >
            <Input />
          </Form.Item>

          <Form.Item label='Уртраг' name='lat' initialValue={data.lat}>
            <InputNumber />
          </Form.Item>

          <Form.Item label='Өргөрөг' name='lng' initialValue={data.lng}>
            <InputNumber />
          </Form.Item>

          <Form.Item label='Зогсоол' name='parking' initialValue={data.parking}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Дэлгэрэнгүй'
            name='courtDetail'
            initialValue={data.courtDetail}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Тайлбар'
            name='description'
            initialValue={data.description}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Оруулах
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CourtForm;
