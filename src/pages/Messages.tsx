import { useState } from 'react';
import { FaEnvelope, FaReply, FaTrash, FaEnvelopeOpen } from 'react-icons/fa';
import './Messages.css';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

const mockMessages: Message[] = [
  {
    id: '1',
    name: 'Javohir Aliyev',
    email: 'javohir@example.com',
    subject: 'Kurs haqida savol',
    message: 'Assalomu alaykum, Python kursi qachon boshlanadi?',
    isRead: false,
    createdAt: '2024-02-12T10:30:00',
  },
  {
    id: '2',
    name: 'Nodira Karimova',
    email: 'nodira@example.com',
    subject: 'Mahsulot yetkazib berish',
    message: 'Arduino Uno qachon yetkazib beriladi?',
    isRead: true,
    createdAt: '2024-02-11T14:20:00',
  },
];

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const markAsRead = (id: string) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, isRead: true } : msg
    ));
  };

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    if (!message.isRead) {
      markAsRead(message.id);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1><FaEnvelope /> Xabarlar</h1>
          <p>Foydalanuvchilardan kelgan xabarlar</p>
        </div>
      </div>

      <div className="messages-layout">
        <div className="messages-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-item ${!message.isRead ? 'unread' : ''} ${selectedMessage?.id === message.id ? 'selected' : ''}`}
              onClick={() => handleSelectMessage(message)}
            >
              <div className="message-item-header">
                <strong>{message.name}</strong>
                {!message.isRead && <span className="unread-badge">Yangi</span>}
              </div>
              <p className="message-subject">{message.subject}</p>
              <p className="message-preview">{message.message}</p>
              <span className="message-date">
                {new Date(message.createdAt).toLocaleDateString('uz-UZ')}
              </span>
            </div>
          ))}
        </div>

        <div className="message-detail">
          {selectedMessage ? (
            <>
              <div className="message-detail-header">
                <div>
                  <h2>{selectedMessage.subject}</h2>
                  <p className="sender-info">
                    <strong>{selectedMessage.name}</strong> ({selectedMessage.email})
                  </p>
                  <span className="message-time">
                    {new Date(selectedMessage.createdAt).toLocaleString('uz-UZ')}
                  </span>
                </div>
                <div className="message-actions">
                  <button className="btn-icon btn-reply"><FaReply /></button>
                  <button className="btn-icon btn-delete"><FaTrash /></button>
                </div>
              </div>
              <div className="message-body">
                <p>{selectedMessage.message}</p>
              </div>
            </>
          ) : (
            <div className="no-message-selected">
              <FaEnvelopeOpen />
              <p>Xabarni ko'rish uchun tanlang</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
