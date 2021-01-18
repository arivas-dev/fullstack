import { Table } from 'antd';
import { retrieveUsers } from 'store/actions/userActions';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Users.scss';

export const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const usersNode = useSelector(s => s.user.users);
  const { isLoading, data, firstFetch } = usersNode;
  const dispatch = useDispatch();

  const columns = [
    {
      title: ' ',
      align: 'center',
      render: (text, record) => (
        <div className="control">
          <label class="radio">
            <input 
              type="radio" 
              name="user" 
              checked={record.id === selectedUser} 
              onChange={(e) => setSelectedUser(record.id)}
            />
          </label>
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: 'Phone number',
      dataIndex: 'telephone',
      key: 'telephone',
      align: 'center'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      align: 'center'
    },
    {
      title: 'Birthdate',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
      align: 'center',
      render: text => {
        return new Date(text).toLocaleDateString();
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center'
    },
  ];

  useEffect(() => {
    if (firstFetch && !isLoading) {
      dispatch(retrieveUsers(0, 10));
    }
  }, [firstFetch, isLoading, dispatch]);


  return (
    <div className="users">
      <div className="users-actions">
        <button className="button is-dark">New user</button>
        <button disabled={!selectedUser} className="button is-info">Update user</button>
      </div>
      <div className="users-data">
        <Table 
          loading={isLoading} 
          dataSource={data.list} 
          columns={columns} 
          pagination={false}
          scroll={{ x: 1200 }}
        />
      </div>
    </div>
  );
};
