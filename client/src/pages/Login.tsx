import React from 'react'
import { Form, Input, Button } from 'antd'
import useTypedDispatch from 'hooks/useTypedDispatch'
import { login } from 'store/api/auth'

interface LoginFormValues {
  loginOrEmail: string,
  password: string
}

const Login: React.FC = () => {
  const dispatch = useTypedDispatch()

  const [form] = Form.useForm()

  const onFinish = (values: LoginFormValues) => {
    const { loginOrEmail, password } = values
    dispatch(login(loginOrEmail, password))
    form.resetFields()
  }

  return (
    <div className="login">
      <Form
        onFinish={onFinish}
        layout="vertical"
        form={form}
        className="login__form"
      >
        <Form.Item
          label="Логин или email"
          name="loginOrEmail"
          rules={[{ required: true, message: 'Пожалуйста введите ваш логин или email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login__btn">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login