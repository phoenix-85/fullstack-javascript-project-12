import { Button, Card, Container, Group, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

function Login() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '' },
    validate: {
      username: isNotEmpty('Должно быть заполнено'),
      password: isNotEmpty('Должно быть заполнено'),
    },
  });

  const handleSubmit = () => console.log('login');

  return (
    <Container size="xs" mt="xl">
      <Card withBorder>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Username"
            placeholder="Username"
            key={form.key('username')}
            {...form.getInputProps('username')}
          />

          <TextInput
            label="Password"
            placeholder="Password"
            mt="md"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" disabled={!form.isValid()}>
              Отправить
            </Button>
          </Group>
        </form>
      </Card>
    </Container>
  );
}

export default Login;
