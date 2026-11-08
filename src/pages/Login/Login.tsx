import { Button, Card, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

import { useLogin } from '@/hooks/useLogin';
import { useTranslation } from 'react-i18next';

function Login() {
  const { mutate: login } = useLogin();
  const { t } = useTranslation();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '' },
    validate: {
      username: isNotEmpty(t('user.errors.emptyUsername')),
      password: isNotEmpty(t('user.errors.emptyPassword')),
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
          label={t('user.labels.username')}
          placeholder={t('user.labels.username')}
          key={form.key('username')}
          {...form.getInputProps('username')}
        />

        <PasswordInput
          label={t('user.labels.password')}
          placeholder={t('user.labels.password')}
          mt="md"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">{t('user.actions.login')}</Button>
        </Group>
      </form>
    </Card>
  );
}

export default Login;
