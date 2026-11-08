import { Button, Card, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';

import { useRegister } from '@/hooks/useRegister';
import { useTranslation } from 'react-i18next';

function Signup() {
  const { mutate: signup } = useRegister();
  const { t } = useTranslation();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '', confirmPassword: '' },
    validate: {
      username: hasLength({ min: 3, max: 20 }, t('user.errors.lengthUsername', { min: 3, max: 20 })),
      password: hasLength({ min: 6 }, t('user.errors.minLengthPassword', { min: 6 })),
      confirmPassword: (value, values) =>
        value !== values.password ? t('user.errors.confirmPassword') : null,
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
          <Text size="xs">{t('user.actions.login')}</Text>
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

        <PasswordInput
          label={t('user.labels.confirmPassword')}
          placeholder={t('user.labels.confirmPassword')}
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
