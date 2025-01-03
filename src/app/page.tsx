'use client';

import * as React from 'react';
import UserProfile from '@/types/profile';
import DashboardLayout from './dashboard/DashboardLayout';
import ChatSection from './dashboard/ChatSection';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  created_at?: string;
}

export default function DashboardPage() {
  const [profile] = React.useState<UserProfile>({
    id: '123',
    email: 'usuario@ejemplo.com',
    full_name: 'Usuario Prueba',
    avatar_url: 'https://example.com/avatar.jpg',
    phone: '123-456-7890',
    subscription_status: 'active',
    subscription_tier: 'monthly',
    trial_end: '2023-12-31',
  });

  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputMessage, setInputMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  return (
    <DashboardLayout 
      profile={profile} 
      activeSection="chat"
    >
      <ChatSection
        profile={profile}
        messages={messages}
        isTyping={isTyping}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={() => {}}
      />
    </DashboardLayout>
  );
}
