import { Table, Pagination } from 'antd';
import { retrieveProducts, saveProduct } from 'store/actions/productActions';
import { ProductModal } from 'components/productModal/ProductModal';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMessenger } from 'hooks/useMessenger';
import './Users.scss';




export const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [modalAction, setModalAction] = useState('New');
    const productsNode = useSelector(s => s.product.products);
    const { isLoading, data, firstFetch } = productsNode;
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
                            checked={record.id === selected.id}
                            onChange={(e) => setSelected(record)}
                        />
                    </label>
                </div>
            ),
        },
        {
            title: 'SKU',
            dataIndex: 'SKU',
            key: 'SKU',
            align: 'center'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            align: 'center'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            align: 'center'
        },
    ];

    useEffect(() => {
        if (firstFetch && !isLoading) {
            dispatch(retrieveProducts(currentPage));
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
            dispatch(retrieveProducts(page));
        }
    }

    const onSave = product => {
        dispatch(saveProduct(product, currentPage));
    }

    const { per_page: perPage = 15, total: pageTotal = 1 } = data.meta || {}
    const total = perPage * pageTotal;

    return (
        <div className="users">
            <div className="users-actions">
                <button
                    onClick={handleNew}
                    className="button is-dark"
                >
                    New Product
        </button>
                <button
                    onClick={handleUpdate}
                    disabled={!selected.id}
                    className="button is-info"
                >
                    Update Product
        </button>
            </div>
            <div className="users-data">
                <Table
                    loading={isLoading}
                    dataSource={data.list}
                    columns={columns}
                    pagination={false}
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
            <ProductModal
                action={modalAction}
                setVisible={setModalOpen}
                visible={modalOpen}
                user={selected}
                onSave={onSave}
            />
        </div>
    );
};
