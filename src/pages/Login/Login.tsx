import { Button, Card, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

import { useLogin } from '@/hooks/useLogin';

function Login() {
  const { mutate: login } = useLogin();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '' },
    validate: {
      username: isNotEmpty('Должно быть заполнено'),
      password: isNotEmpty('Должно быть заполнено'),
    },
  });

  const handleSubmit = () => {
    const { username, password } = form.getValues();

    login(
      { username, password },
      {
        onSuccess: () => {
          form.reset();
        },
        onError: (error) => {
          form.setFieldError('username', error.message);
          form.resetField('password');
        },
      }
    );
  };

  return (
    <Card w={350} withBorder>
      <Group justify="flex-end" mb="xs">
        <a href="/signup">
          <Text size="xs">Зарегистрироваться</Text>
        </a>
      </Group>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Имя пользователя"
          placeholder="Username"
          key={form.key('username')}
          {...form.getInputProps('username')}
        />

        <PasswordInput
          label="Пароль"
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
