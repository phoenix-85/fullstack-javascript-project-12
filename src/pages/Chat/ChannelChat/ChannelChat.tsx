import { Group, ScrollArea, Stack, Text } from '@mantine/core';
import { useEffect, useRef } from 'react';

import { useChannelMessages } from '@/hooks/useChannelMessages';
import { useUsername } from '@/hooks/useUsername';

function ChannelChat() {
  const messages = useChannelMessages();
  const username = useUsername();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ScrollArea bdrs="lg" bg="transparent" p="xl" scrollbars="y">
      {messages.map((message) => (
        <Group key={message.id} justify={message.username === username ? 'right' : 'left'}>
          <Stack gap={0} align="end" mt="xs" maw="80%">
            <Text ta="right" fs="italic" fw={700}>
              {message.username}
            </Text>

            <Text
              ta="right"
              style={{
                whiteSpace: 'normal',
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
              }}
            >
              {message.body}
            </Text>
          </Stack>
        </Group>
      ))}
      <div ref={bottomRef} />
    </ScrollArea>
  );
}

export default ChannelChat;
