import { Button, Card, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';

import { useRegister } from '@/hooks/useRegister';

function Signup() {
  const { mutate: signup } = useRegister();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '', confirmPassword: '' },
    validate: {
      username: hasLength({ min: 3, max: 20 }, 'Имя пользователя должен быть от 3 до 20 символов'),
      password: hasLength({ min: 6 }, 'Пароль должен быть не менее 6 символов'),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Пароли не совпадают' : null,
    },
  });

  const handleSubmit = () => {
    const { username, password } = form.getValues();

    signup(
      { username, password },
      {
        onSuccess: () => {
          form.reset();
        },
        onError: (error) => {
          form.setFieldError('username', error.message);
          form.resetField('password');
          form.resetField('confirmPassword');
        },
      }
    );
  };

  return (
    <Card w={350} withBorder>
      <Group justify="flex-end" mb="xs">
        <a href="/login">
          <Text size="xs">Войти</Text>
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

        <PasswordInput
          label="Подтверждение пароля"
          placeholder="Confirm Password"
          mt="xs"
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Зарегистрироваться</Button>
        </Group>
      </form>
    </Card>
  );
}

export default Signup;
