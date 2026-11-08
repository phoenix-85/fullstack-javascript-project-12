import { Button, Group, TextInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';

import { useActiveChannel } from '@/hooks/useActiveChannel';
import { useCreateChannel } from '@/hooks/useCreateChannel';
import { useFetchChannels } from '@/hooks/useFetchChannels';
import { useTranslation } from 'react-i18next';

function AddChannelForm() {
  const [_, setActiveChannel] = useActiveChannel();
  const { mutate: addNewChannel, isPending } = useCreateChannel();
  const { data: channels } = useFetchChannels();
  const { t } = useTranslation();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '' },
    validateInputOnChange: true,
    validateDebounce: 500,
    validate: {
      name: (value) => {
        if (channels?.some((c) => c.name === value)) {
          return t('channel.errors.exists');
        }

        const length = { min: 3, max: 20 };

        return hasLength(
          length,
          t('channel.errors.hasLength', length)
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
          {t(isPending ? 'channel.statuses.adding' : 'channel.action.add')}
        </Button>
      </Group>
    </form>
  );
}

export default AddChannelForm;
