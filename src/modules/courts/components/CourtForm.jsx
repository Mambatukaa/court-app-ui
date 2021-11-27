import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

import { PlusCircleOutlined } from '@ant-design/icons';

const CourtForm = props => {
  const [form] = Form.useForm();

  const court = props.court || {};
  const location = court.location || {};

  const [data] = useState({
    name: court.name || '',
    ownerId: court.ownerId || '',
    featuredImage: court.featuredImage || '',
    // slotSize: court.slotSize || 15,
    description: court.description || '',
    warning: court.warning || '',
    parking: court.parking || '',
    // courtDetail: court.courtDetail || '',
    location: {
      latitude: location.latitude,
      longitude: location.longitude
    }
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { addCourt, editCourt, allUsers = [], currentUser } = props;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = values => {
    const doc = {
      name: values.name,
      ownerId: values.ownerId,
      featuredImage: values.featuredImage,
      description: values.description,
      warning: values.warning,
      parking: values.parking,

      location: {
        latitude: Number(values.latitude),
        longitude: Number(values.longitude)
      }
    };

    if (court.name) {
      editCourt(court._id, {
        ...doc
      });
    } else {
      addCourt({ ...doc });
    }

    setIsModalVisible(false);
  };

  const { Option } = Select;
  return (
    <>
      <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>
        {props.btnTxt}
      </Button>
      <Modal
        title="Заал нэмэх"
        visible={isModalVisible}
        onOk={form.submit}
        onCancel={handleCancel}
        width={800}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 14
          }}
          layout="horizontal"
        >
          {currentUser?.role === 'admin' ? (
            <Form.Item
              label="Заалны менежер"
              name="ownerId"
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

          <Form.Item label="Нэр" name="name" initialValue={data.name}>
            <Input required />
          </Form.Item>

          {/* <Form.Item
            label="Хүний хэмжээ"
            name="slotSize"
            initialValue={data.slotSize}
          >
            <InputNumber />
          </Form.Item> */}

          <Form.Item
            label="Зураг"
            name="featuredImage"
            initialValue={data.featuredImage}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Анхааруулга"
            name="warning"
            initialValue={data.warning}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Уртраг"
            name="latitude"
            initialValue={data.location.latitude}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Өргөрөг"
            name="longitude"
            initialValue={data.location.longitude}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item label="Зогсоол" name="parking" initialValue={data.parking}>
            <Input />
          </Form.Item>

          {/* <Form.Item
            label="Дэлгэрэнгүй"
            name="courtDetail"
            initialValue={data.courtDetail}
          >
            <Input />
          </Form.Item> */}

          <Form.Item
            label="Тайлбар"
            name="description"
            initialValue={data.description}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CourtForm;
