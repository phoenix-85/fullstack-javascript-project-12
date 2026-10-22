import { Box, Splitter, Stack } from '@mantine/core';

import { useFetchMessages } from '@/hooks/useFetchMessages';
import { useSubscribeMessages } from '@/hooks/useSubscribeMessages';
import ChannelList from '@/pages/Chat/ChannelList';
import ChatWindow from '@/pages/Chat/ChatWindow';
import CreateMessageForm from '@/pages/Chat/CreateMessageForm';

function Chat() {
  useFetchMessages();
  useSubscribeMessages();

  return (
    <Box bdrs="lg" bg="#4A5167">
      <Splitter withHandle={false} h="70vh" p="xs" handleColor="transparent">
        <Splitter.Pane defaultSize={30} min={20}>
          <ChannelList />
        </Splitter.Pane>
        <Splitter.Pane defaultSize={70} min={40}>
          <Stack justify="space-between" h="100%" ml="xs">
            <ChatWindow />
            <CreateMessageForm />
          </Stack>
        </Splitter.Pane>
      </Splitter>
    </Box>
  );
}

export default Chat;
