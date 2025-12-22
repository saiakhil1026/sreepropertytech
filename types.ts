
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  status: 'Managed' | 'Vacant' | 'Tenanted';
  image: string;
}
