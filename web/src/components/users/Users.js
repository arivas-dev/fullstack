import { Table, Pagination } from 'antd';
import { retrieveUsers, registerUser, updateUser } from 'store/actions/userActions';
import { UserModal } from 'components/userModal/UserModal';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMessenger } from 'hooks/useMessenger';
import { messages } from 'constants/messages';
import './Users.scss';


export const Users = () => {
  //Local state
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('New');

  //Redux
  const dispatch = useDispatch();
  const usersNode = useSelector(s => s.user.users);
  const registerNode = useSelector(s => s.product.register);
  const updateNode = useSelector(s => s.user.update);
  const { isLoading, data, firstFetch } = usersNode;

  //Messages
  useMessenger(registerNode, messages.users.created);
  useMessenger(updateNode, messages.users.updated);


  const columns = [
    {
      title: ' ',
      align: 'center',
      dataIndex: 'id',
      key: 'id',
      render: (text, record) => (
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="user"
              checked={record.id === selectedUser.id}
              onChange={(e) => setSelectedUser(record)}
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
      dispatch(retrieveUsers(currentPage));
    }
  }, [firstFetch, isLoading, dispatch, currentPage]);

  const handleNew = () => {
    setModalAction('New');
    setModalOpen(true);
  }

  const handleUpdate = () => {
    setModalAction('Update');
    setModalOpen(true);
  }

  const handlePagination = page => {
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatch(retrieveUsers(page));
    }
  }

  const onSave = async (user) => {
    await dispatch(registerUser(user, currentPage));
    setModalOpen(false);
  }

  const onUpdate = async (user) => {
    await dispatch(updateUser({ ...user, id: selectedUser.id }));
    setSelectedUser({});
    setModalOpen(false);
  }

  const { per_page: perPage = 15, total } = data.meta || {}

  return (
    <div className="users">
      <div className="users-actions">
        <button
          onClick={handleNew}
          className="button is-dark"
        >
          New user
        </button>
        <button
          onClick={handleUpdate}
          disabled={!selectedUser.id}
          className="button is-info"
        >
          Update user
        </button>
      </div>
      <div className="users-data">
        <Table
          loading={isLoading}
          dataSource={data.list}
          columns={columns}
          pagination={false}
          rowKey="id"
          scroll={{ x: 1200 }}
        />
        <div className="users-pagination">
          <Pagination
            disabled={isLoading}
            total={total}
            defaultCurrent={1}
            pageSize={perPage}
            onChange={page => handlePagination(page)}
          />
        </div>
      </div>
      <UserModal
        action={modalAction}
        setVisible={setModalOpen}
        visible={modalOpen}
        loading={registerNode.isLoading || updateNode.isLoading}
        onSave={onSave}
        onUpdate={onUpdate}
        user={selectedUser}
      />
    </div>
  );
};
