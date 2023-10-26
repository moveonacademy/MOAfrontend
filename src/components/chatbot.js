import { Chat, ChatWindow, Launcher, SessionStatus, SystemResponse, TurnType, UserResponse, useRuntime } from '@voiceflow/react-chat';
import { useState } from 'react';
import { match } from 'ts-pattern';
import React from 'react'
const IMAGE = 'https://picsum.photos/seed/1/200/300';
const AVATAR = 'https://picsum.photos/seed/1/80/80';

export const Chatbot = () => {
  const [open, setOpen] = useState(false);

  const runtime = useRuntime({
    verify: { authorization: '653a78d8978fad000708e03e' },
    session: { userID: '123' },
  });

  const handleLaunch = async () => {
    setOpen(true);
    await runtime.launch();
  };

  const handleEnd = () => {
    runtime.setStatus(SessionStatus.ENDED);
    setOpen(false);
  };

  if (!open) {
    return (
      <span
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '2rem',
        }}
      >
        <Launcher onClick={handleLaunch} />
      </span>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        right: '1rem',
        top: '3rem',
        bottom: '3rem',
        width: '400px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <ChatWindow.Container>
        <Chat
          title="My Assistant"
          description="welcome to my assistant"
          image={IMAGE}
          avatar={AVATAR}
          withWatermark
          startTime={runtime.session.startTime}
          hasEnded={runtime.isStatus(SessionStatus.ENDED)}
          isLoading={!runtime.session.turns.length}
          onStart={runtime.launch}
          onEnd={handleEnd}
          onSend={runtime.reply}
          onMinimize={handleEnd}
        >
          {runtime.session.turns.map((turn, turnIndex) =>
            match(turn)
              .with({ type: TurnType.USER }, ({ id, type: _, ...props }) => <UserResponse {...props} key={id} />)
              .with({ type: TurnType.SYSTEM }, ({ id, type: _, ...props }) => (
                <SystemResponse key={id} {...props} avatar={AVATAR} isLast={turnIndex === runtime.session.turns.length - 1} />
              ))
              .exhaustive()
          )}
          {runtime.indicator && <SystemResponse.Indicator avatar={AVATAR} />}
        </Chat>
      </ChatWindow.Container>
    </div>
  );
};