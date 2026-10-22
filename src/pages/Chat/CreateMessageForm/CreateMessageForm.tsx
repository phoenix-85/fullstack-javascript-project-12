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
    <Box bdrs="lg" bg="gray.2" p="xs">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group justify="space-between">
          <TextInput name="message" key={form.key('message')} {...form.getInputProps('message')} />
          <Button bg="#777C91" type="submit" disabled={!form.isValid()}>
            Send
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default CreateMessageForm;
