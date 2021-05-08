import React from 'react';
import { List, Avatar, Button } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

const UsersList = props => {
  const { allUsers, removeUser } = props;

  const remove = id => {
    removeUser(id);
  };

  return (
    <div
      style={{ margin: 10, marginTop: 80, border: 'solid', borderWidth: 0.2 }}
    >
      <List style={{ padding: 5 }}>
        {allUsers.map((user, index) => {
          return (
            <List.Item key={index}>
              <List.Item.Meta
                avatar={
                  <Avatar src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' />
                }
                title={<p>{user.username}</p>}
                description={user.email}
              />
              <Button
                type='primary'
                icon={<DeleteOutlined />}
                onClick={() => remove(user._id)}
              >
                Устгах
              </Button>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default UsersList;
