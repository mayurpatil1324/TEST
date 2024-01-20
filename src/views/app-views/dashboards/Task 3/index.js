import React, { useState } from 'react';
import { Button, Card, Form, Input, Table } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ContactUs = () => {
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState([]);

  const handleInputChange = () => { };

  const handleSubmit = (values) => {
    setTableData((prevData) => [...prevData, { key: Date.now(), ...values }]);
    form.resetFields();
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Mobile No.', dataIndex: 'mobileno', key: 'mobileno' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
  ];

  return (
    <>
      
      <Card style={{ width: '500px' }}>
      <div
          className="text"
          style={{ fontSize: `25px`, paddingBottom:"50px" }}
        >
          <strong>Country State City dropdown create separate.</strong>
        </div>
        <Form
          form={form}
          onFinish={handleSubmit}
          onValuesChange={handleInputChange}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile No." name="mobileno">
            <Input />
          </Form.Item>
          <Form.Item name='description'>
            <TextArea placeholder='Description' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Table dataSource={tableData} columns={columns} />
      </Card>
    </>
  );
};

export default ContactUs;
