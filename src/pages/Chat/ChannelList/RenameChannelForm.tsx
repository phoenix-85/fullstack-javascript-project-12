import { Button, Group, TextInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';

import { ChannelData } from '@/api/types';
import { useFetchChannels } from '@/hooks/useFetchChannels';
import { useRenameChannel } from '@/hooks/useRenameChannel';
import { useTranslation } from 'react-i18next';

function RenameChannelForm({ channel }: { channel: ChannelData }) {
  const { data: channels } = useFetchChannels();
  const { mutate: renameChannel, isPending } = useRenameChannel();
  const { t } = useTranslation();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: channel.name },
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
          {t(isPending ? 'channel.statuses.renaming' : 'channel.action.rename')}
        </Button>
      </Group>
    </form>
  );
}

export default RenameChannelForm;
