import { Box, Button, Loader, Menu, Stack, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useState } from 'react';

import { ChannelData } from '@/api/types';
import { useActiveChannel } from '@/hooks/useActiveChannel';
import { useDeleteChannel } from '@/hooks/useDeleteChannel';
import { useFetchChannels } from '@/hooks/useFetchChannels';

import AddChannelForm from './AddChannelForm';
import RenameChannelForm from './RenameChannelForm';

function ChannelList() {
  const [contextChannel, setContextChannel] = useState<ChannelData>();
  const [activeChannelId, setActiveChannel] = useActiveChannel();
  const { data: channels, error, isLoading, isError, isSuccess } = useFetchChannels();
  const { mutate: removeChannel } = useDeleteChannel();

  const addChannel = () => modals.open({ children: <AddChannelForm /> });

  const renameChannel = () => {
    if (!contextChannel) {
      return;
    }
    modals.open({ children: <RenameChannelForm channel={contextChannel} /> });
  };

  const deleteChannel = () =>
    modals.openConfirmModal({
      title: 'Удаление канала',
      children: <Text>Удалить канал {contextChannel?.name}?</Text>,
      labels: { confirm: 'Ок', cancel: 'Отмена' },
      onConfirm: () => {
        if (!contextChannel) {
          return;
        }
        removeChannel(contextChannel.id);
        setActiveChannel('1');
        setContextChannel(undefined);
      },
    });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Text>Ошибка загрузки: {error.message}</Text>;
  }

  return (
    <Box bdrs="lg" bg="gray.3" p="xl" h="100%">
      <Stack justify="space-between" h="100%">
        <Menu shadow="md" width={200}>
          <Menu.ContextMenu>
            <Box>
              {isSuccess &&
                channels?.map((channel) => (
                  <Text
                    key={channel.id}
                    bg={channel.id === activeChannelId ? 'white' : 'transparent'}
                    onClick={() => setActiveChannel(channel.id)}
                    onContextMenu={() => {
                      setActiveChannel(channel.id);
                      setContextChannel(channel);
                    }}
                  >
                    # {channel.name}
                  </Text>
                ))}
            </Box>
          </Menu.ContextMenu>

          <Menu.Dropdown>
            <Menu.Item onClick={renameChannel}>Переименовать</Menu.Item>

            <Menu.Item color="red" disabled={!contextChannel?.removable} onClick={deleteChannel}>
              Удалить
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Button size="xs" onClick={addChannel}>
          Добавить канал
        </Button>
      </Stack>
    </Box>
  );
}

export default ChannelList;
