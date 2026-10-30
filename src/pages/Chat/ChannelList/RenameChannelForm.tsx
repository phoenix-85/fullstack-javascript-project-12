import { Button, Group, TextInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';

import { ChannelData } from '@/api/types';
import { useFetchChannels } from '@/hooks/useFetchChannels';
import { useRenameChannel } from '@/hooks/useRenameChannel';

function RenameChannelForm({ channel }: { channel: ChannelData }) {
  const { data: channels } = useFetchChannels();
  const { mutate: renameChannel, isPending } = useRenameChannel();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: channel.name },
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
    if (!channel) {
      return;
    }

    renameChannel(form.getValues().name, {
      onSuccess: () => {
        form.reset();
        modals.closeAll();
      },
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput data-autofocus key={form.key('name')} {...form.getInputProps('name')} />

      <Group justify="flex-end" mt="md">
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Переименование...' : 'Переименовать'}
        </Button>
      </Group>
    </form>
  );
}

export default RenameChannelForm;
