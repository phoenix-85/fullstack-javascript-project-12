import { Box, Loader, Text } from '@mantine/core';

import { useActiveChannel } from '@/hooks/useActiveChannel';
import { useFetchChannels } from '@/hooks/useFetchChannels';

function ChannelList() {
  const [activeChannelId, setActiveChannel] = useActiveChannel();
  const {
    data: channels,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useFetchChannels();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Text>Ошибка загрузки: {error.message}</Text>;
  }

  return (
    <Box bdrs="lg" bg="#777C91" p="xl" h="100%">
      {isSuccess &&
        channels?.map((channel) => (
          <Text
            key={channel.id}
            bg={channel.id === activeChannelId ? 'gray.2' : 'transparent'}
            onClick={() => setActiveChannel(channel.id)}
          >
            {channel.name}
          </Text>
        ))}
    </Box>
  );
}

export default ChannelList;
