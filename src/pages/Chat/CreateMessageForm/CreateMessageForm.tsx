import { Box, Button, Group, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

import { useCreateMessage } from '@/hooks/useCreateMessage';

function CreateMessageForm() {
  const { mutate: createMessage } = useCreateMessage();
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
            Отправить
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default CreateMessageForm;
