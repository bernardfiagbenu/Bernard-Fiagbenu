
'use client';

import { useChat } from 'ai/react';
import { User, Bot, Send, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Balancer from 'react-wrap-balancer';
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from 'react';

export default function Chatbot() {
  const { toast } = useToast();
  const [chatError, setChatError] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error, setMessages } = useChat({
    api: '/api/chat',
    initialMessages: [
        {
            id: 'initial-greeting',
            role: 'assistant',
            content: "Hello! I'm Portfolio Pro, your personal guide to Bernard Fiagbenu's work. Ask me anything about his skills, projects, or experience.",
        }
    ],
    onError: async (err) => {
      console.error('Chat Error:', err);
      try {
        const errorBody = await err.response.json();
        setChatError(errorBody.details || err.message);
      } catch {
        setChatError(err.message || "An unknown error occurred. Please check the logs.");
      }
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was an issue communicating with the AI assistant. Please try again later.",
      });
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setChatError(null); // Clear previous errors on new submission
    handleSubmit(e);
  };

  const handleRetry = () => {
    setChatError(null);
    const userMessages = messages.filter(m => m.role === 'user');
    const lastUserMessage = userMessages[userMessages.length - 1];
    if (lastUserMessage) {
        // Remove the last user message and any failed assistant response to retry
        setMessages(messages.slice(0, messages.indexOf(lastUserMessage)));
        handleSubmit(new Event('submit') as any, {
            options: {
                body: {
                    messages: [...messages.slice(0, messages.indexOf(lastUserMessage)), lastUserMessage]
                }
            }
        });
    }
  };


  return (
    <div className="flex flex-col h-[600px] w-full max-w-3xl mx-auto rounded-lg border shadow-lg">
      <div className="p-4 border-b text-center">
        <h2 className="font-headline text-2xl text-primary">Portfolio Assistant</h2>
        <p className="text-sm text-muted-foreground">Ask me about Bernard's skills, projects, and more.</p>
      </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map(m => (
          <div
            key={m.id}
            className={cn(
              'flex gap-3 text-sm',
              m.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {m.role === 'assistant' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
            )}
            <div
              className={cn(
                'rounded-lg px-4 py-2 max-w-[85%]',
                m.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              <Balancer>{m.content}</Balancer>
            </div>
            {m.role === 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
         {isLoading && (
          <div className="flex justify-start gap-3 text-sm">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div className="rounded-lg px-4 py-2 bg-muted text-muted-foreground flex items-center">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
        {chatError && (
             <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 mt-1" />
                    <div>
                        <p className="font-bold">AI Assistant Error</p>
                        <p className="mt-1">{chatError}</p>
                        <Button variant="destructive" size="sm" onClick={handleRetry} className="mt-3">
                            Retry Last Message
                        </Button>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <form onSubmit={handleFormSubmit} className="w-full flex items-center gap-2">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="e.g., What are Bernard's main programming languages?"
            className="flex-grow resize-none"
            rows={1}
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleFormSubmit(e as any);
              }
            }}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}
