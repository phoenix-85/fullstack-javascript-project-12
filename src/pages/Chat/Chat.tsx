import { Box, Button, Group, Splitter, Stack, TextInput } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { fetchChannels, fetchMessages } from '@/api/chat';
import { useToken } from '@/hooks/useToken';
import useChatStore from '@/store';

function Chat() {
  const activeChannelId = useChatStore((state) => state.activeChannelId);
  const setActiveChannel = useChatStore((state) => state.setActiveChannelId);
  const token = useToken();

  const { data: channels, isSuccess } = useQuery({
    queryKey: ['channels'],
    queryFn: () => fetchChannels(token),
    staleTime: 1000 * 60 * 15,
  });

  const { data: messages, } = useQuery({
    queryKey: ['messages'],
    queryFn: () => fetchMessages(token),
    staleTime: 1000 * 5,
  });

  return (
    <Box bdrs="lg" bg="#4A5167">
      <Splitter withHandle={false} h="70vh" p="xs" handleColor="transparent">
        <Splitter.Pane defaultSize={30} min={20}>
          <Box bdrs="lg" bg="#777C91" p="xl" h="100%">
            {isSuccess && channels.map((channel) =>
              <div
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
              >
                {channel.name}
              </div>)
            }
          </Box>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={70} min={40}>
          <Stack justify="space-between" h="100%" ml="xs">
            <Box bdrs="lg" bg="transparent" p="xl">
              {activeChannelId && messages
                .filter((message) => message.channelId === activeChannelId)
                .map((message) =>
                  <div
                    key={message.id}
                  >
                    {message.username}: {message.body}
                  </div>)
              }
            </Box>
            <Box bdrs="lg" bg="gray.2" p="xs">
              <form>
                <Group justify="space-between">
                  <TextInput />
                  <Button bg="#777C91">Send</Button>
                </Group>
              </form>
            </Box>
          </Stack>
        </Splitter.Pane>
      </Splitter>
    </Box>
  );
}

export default Chat;
