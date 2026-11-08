import { Box, Button, Group, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

import { useCreateMessage } from '@/hooks/useCreateMessage';
import { useTranslation } from 'react-i18next';

function CreateMessageForm() {
  const { mutate: createMessage } = useCreateMessage();
  const { t } = useTranslation();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
    validate: {
      message: isNotEmpty(),
    },
  });

  const handleSubmit = () => {
    createMessage(form.getValues().message);
    form.reset();
  };

  return (
    <Box bdrs="lg" bg="blue" p={4}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group justify="space-between">
          <TextInput
            autoFocus
            name="message"
            w="75%"
            key={form.key('message')}
            {...form.getInputProps('message')}
          />

          <Button bg="black" type="submit" disabled={!form.isValid()}>
            {t('message.actions.send')}
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default CreateMessageForm;
