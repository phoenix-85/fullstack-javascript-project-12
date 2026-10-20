import { Button, Card, Group, PasswordInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

import { useLogin } from '@/hooks/useLogin';

function Login() {
  const login = useLogin();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '' },
    validate: {
      username: isNotEmpty('Должно быть заполнено'),
      password: isNotEmpty('Должно быть заполнено'),
    },
  });

  const handleSubmit = async (formData: typeof form.values) => {
    try {
      await login(formData);
      form.reset();
    } catch (error) {
      form.setFieldValue('password', '');
      form.setErrors({ username: 'Неправильный логин или пароль' });
    }
  };

  return (
    <Card w={300} withBorder>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Username"
          placeholder="Username"
          key={form.key('username')}
          {...form.getInputProps('username')}
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          mt="md"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Войти</Button>
        </Group>
      </form>
    </Card>
  );
}

export default Login;
