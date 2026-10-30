import { Button, Group, TextInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';

import { useActiveChannel } from '@/hooks/useActiveChannel';
import { useCreateChannel } from '@/hooks/useCreateChannel';
import { useFetchChannels } from '@/hooks/useFetchChannels';

function AddChannelForm() {
  const [_, setActiveChannel] = useActiveChannel();
  const { mutate: addNewChannel, isPending } = useCreateChannel();
  const { data: channels } = useFetchChannels();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '' },
    validateInputOnChange: true,
    validateDebounce: 500,
    validate: {
      name: (value) => {
        if (channels?.some((c) => c.name === value)) {
          return 'Канал с таким названием уже существует';
        }

        return hasLength(
          { min: 3, max: 20 },
          'Название канала должно быть от 3 до 20 символов'
        )(value);
      },
    },
  });

  const handleSubmit = () => {
    addNewChannel(form.getValues().name, {
      onSuccess: (newChannel) => {
        form.reset();
        modals.closeAll();
        setActiveChannel(newChannel.id);
      },
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput data-autofocus key={form.key('name')} {...form.getInputProps('name')} />

      <Group justify="flex-end" mt="md">
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Добавление...' : 'Добавить'}
        </Button>
      </Group>
    </form>
  );
}

export default AddChannelForm;
