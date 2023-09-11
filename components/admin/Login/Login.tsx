import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authenticated } from "../../../app/AppState/Features/admin/adminSlice";

function Login() {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    axios
      .post("https://fill-m-next-ts-app.vercel.app/api/admin/login", values)
      // .post("http://localhost:3000/api/admin/login", values)
      .then((response) => {
        console.log("response: ", response);
        if (response.data.success) {
          dispatch(authenticated());
          // form.resetFields();
          // toast.success("Puzzle created!");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Login">
      <Form onFinish={onFinish} className="Login-form-wrapper">
        <Form.Item name="username">
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item name="password">
          <Input type="password" placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="default" htmlType="submit" className="Login-btn">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
