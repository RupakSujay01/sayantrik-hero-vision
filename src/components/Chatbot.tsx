import { useState, useRef, useEffect } from 'react';
import { X, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CHATBOT_CONFIG } from '@/data/chatbot-config';
import { KNOWLEDGE_BASE } from '@/data/knowledge-base';
import { cn } from '@/lib/utils';
import { ChikooAvatar } from './ChikooAvatar';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface ChatbotProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'init-1',
            text: CHATBOT_CONFIG.initialMessage,
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom needs a slight delay for content to render
    useEffect(() => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            }
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate processing delay
        setTimeout(() => {
            const responseText = getMockResponse(userMsg.text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    // Intelligent response matching
    const findBestMatch = (text: string): string => {
        const lowerText = text.toLowerCase();

        // 1. Check strict hardcoded guardrails first
        if (lowerText.includes('joke') || lowerText.includes('movie') || lowerText.includes('weather') || lowerText.includes('sport')) {
            return CHATBOT_CONFIG.cannedResponses.offTopic;
        }
        if (lowerText.includes('personal') || lowerText.includes('you real')) {
            return CHATBOT_CONFIG.cannedResponses.personal;
        }
        if (lowerText.includes('bribe') || lowerText.includes('money') || lowerText.includes('kickback')) {
            return CHATBOT_CONFIG.cannedResponses.bribery;
        }

        // 2. Search Knowledge Base
        // Simple token matching: Score = number of matching keywords
        let bestMatch = null;
        let highestScore = 0;

        // Tokenize user input, removing common stop words
        const userTokens = lowerText.split(/[\s,?.!]+/).filter(t => t.length > 2);

        for (const entry of KNOWLEDGE_BASE) {
            let score = 0;
            // Check against entry keywords
            for (const keyword of entry.keywords) {
                // Check if the user's text contains this specific keyword phrase
                if (lowerText.includes(keyword)) {
                    // Give higher weight to multi-word matches
                    score += keyword.split(' ').length * 2;
                }
            }

            // Also check standard token overlap
            for (const token of userTokens) {
                if (entry.keywords.some(k => k.includes(token))) {
                    score += 1;
                }
            }

            if (score > highestScore) {
                highestScore = score;
                bestMatch = entry;
            }
        }

        // 3. Return best match or fallback
        // Threshold: needs at least some relevance
        if (bestMatch && highestScore >= 2) {
            return bestMatch.answer;
        }

        return CHATBOT_CONFIG.cannedResponses.default;
    };

    const getMockResponse = (text: string): string => {
        return findBestMatch(text);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-24 right-24 md:right-28 z-50 w-[350px] md:w-[400px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col h-[500px]">
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full relative overflow-visible flex items-center justify-center w-12 h-12">
                        {/* Animated Avatar in Header */}
                        <div className="w-8 h-8 relative">
                            <ChikooAvatar className="w-full h-full" state={isTyping ? 'thinking' : 'idle'} />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg leading-none">{CHATBOT_CONFIG.name}</h3>
                        <p className="text-white/80 text-xs mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            Online
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4 bg-gray-50" ref={scrollRef}>
                <div className="space-y-4">
                    <AnimatePresence initial={false}>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={cn(
                                    "flex gap-3 max-w-[85%]",
                                    msg.sender === 'user' ? "ml-auto flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden",
                                    msg.sender === 'user' ? "bg-gray-200" : "bg-transparent"
                                )}>
                                    {msg.sender === 'user' ?
                                        <User className="h-4 w-4 text-gray-600" /> :
                                        <ChikooAvatar className="w-full h-full" state="idle" />
                                    }
                                </div>
                                <div className={cn(
                                    "p-3 rounded-2xl text-sm shadow-sm",
                                    msg.sender === 'user'
                                        ? "bg-primary text-white rounded-tr-none"
                                        : "bg-white text-gray-700 rounded-tl-none border border-gray-100"
                                )}>
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3 max-w-[85%]"
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                <ChikooAvatar className="w-full h-full" state="thinking" />
                            </div>
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            </div>
                        </motion.div>
                    )}
                </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your query..."
                        className="flex-1 focus-visible:ring-primary"
                    />
                    <Button
                        type="submit"
                        size="icon"
                        className="shrink-0 bg-primary hover:bg-primary/90 transition-colors"
                        disabled={!inputText.trim() || isTyping}
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
                <p className="text-[10px] text-center text-gray-400 mt-2">
                    I handle professional business inquiries only.
                </p>
            </div>
        </div>
    );
};
