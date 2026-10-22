import { Box } from '@mantine/core';

import { useChannelMessages } from '@/hooks/useChannelMessages';

function ChatWindow() {
  const messages = useChannelMessages();

  return (
    <Box bdrs="lg" bg="transparent" p="xl">
      {messages.map((message) => (
        <div key={message.id}>
          {message.username}: {message.body}
        </div>
      ))}
    </Box>
  );
}

export default ChatWindow;
