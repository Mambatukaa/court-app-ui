import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Form, FormGroup, ControlLabel, FormControl } from 'rsuite';
import { PlusCircleOutlined } from '@ant-design/icons';

const CourtForm = props => {
  const court = props.court || {};

  const [data, setData] = useState({
    name: court.name || '',
    shortName: court.shortName || '',
    image: court.image || '',
    price: court.price || '',
    description: court.description || '',
    warning: court.warning || '',
    parking: court.parking || '',
    courtDetail: court.courtDetail || '',
    lat: '',
    lng: '',
    ownerId: court.ownerId || ''
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { addCourt, editCourt } = props;

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

  return (
    <>
      <Button type='primary' icon={<PlusCircleOutlined />} onClick={showModal}>
        {props.btnTxt}
      </Button>
      <Modal
        title='Заалын мэдээлэл'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Form
          initialValues={data}
          onValuesChange={setData}
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 14
          }}
          layout='horizontal'
        >
          <Form layout='horizontal' formValue={data} onChange={setData}>
            <FormGroup>
              <ControlLabel>Менежер</ControlLabel>
              {/*  <Select
                showSearch
                style={{ width: 224 }}
                placeholder='Менежер сонгох'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {allUsers.map(user => {
                  return <Option value={data.ownerId}>{user.username}</Option>;
                })}
              </Select> */}
            </FormGroup>
            <FormGroup>
              <ControlLabel>Нэр</ControlLabel>
              <FormControl name='name' value={data.name} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Богино нэр</ControlLabel>
              <FormControl name='shortName' value={data.shortName} />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Үнэ</ControlLabel>
              <FormControl name='price' value={data.price} />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Зураг</ControlLabel>
              <FormControl name='image' value={data.image} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Анхааруулга</ControlLabel>
              <FormControl name='warning' value={data.warning} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Уртраг</ControlLabel>
              <FormControl name='lat' value={data.lat} type='number' />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Өргөрөг</ControlLabel>
              <FormControl name='lng' value={data.lng} type='number' />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Зогсоол</ControlLabel>
              <FormControl name='parking' value={data.parking} />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Дэлгэрэнгүй</ControlLabel>
              <FormControl name='courtDetail' value={data.courtDetail} />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Тайлбар</ControlLabel>
              <FormControl
                name='description'
                value={data.description}
                rows={3}
                componentClass='textarea'
              />
            </FormGroup>
          </Form>
        </Form>
      </Modal>
    </>
  );
};

export default CourtForm;
