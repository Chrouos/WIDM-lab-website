import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef, useEffect } from 'react';
import { BiMessageDetail } from "react-icons/bi";
import { IoMdReturnLeft } from "react-icons/io";
import { motion } from 'framer-motion';
import { RetrievalApi } from 'domain/api-client/src';
import eventBus from '../utils/eventBus'; // 引入事件總線

export default function LayoutMessage() {
  const [messages, setMessages] = useState([]);
  const nodeRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error('Failed to parse chatMessages from localStorage', e);
      }
    }
    eventBus.on('refreshMessages', loadMessagesFromStorage); // 訂閱刷新消息事件
    return () => {
      eventBus.off('refreshMessages', loadMessagesFromStorage); // 清除訂閱
    };
  }, []);

  const loadMessagesFromStorage = () => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100); // 延遲滾動操作，確保元素渲染完成
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitMessage = async (current_text) => {
    const timestamp = new Date().toLocaleString(); // 獲取當前時間
    const newMessage = { sender: 'user', text: current_text };
    const timeMessage = { sender: 'time', text: timestamp };
    const updatedMessages = [...messages, timeMessage, newMessage];
    if (updatedMessages.length > 15) {
      updatedMessages.shift();
      updatedMessages.shift(); // 移除最舊的訊息
    }
    setMessages(updatedMessages);
    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages)); // 更新 localStorage
    eventBus.emit('refreshMessages'); // 通知其他對話框刷新消息

    const apiClient = new RetrievalApi();
    const data = await apiClient.retrievalQueryGetWithHttpInfo(current_text);
    const responseMessage = { sender: 'api', text: data.response.text };
    const finalMessages = [...updatedMessages, responseMessage];
    if (finalMessages.length > 15) {
      finalMessages.shift(); // 移除最舊的訊息
    }
    setMessages(finalMessages);
    localStorage.setItem('chatMessages', JSON.stringify(finalMessages)); // 更新 localStorage
    eventBus.emit('refreshMessages'); // 通知其他對話框刷新消息
  };

  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState('6rem');
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      const newHeight = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.style.height = newHeight;
      setTextareaHeight(newHeight);
    }
  }, [text]);

  const handleSubmit = () => {
    handleSubmitMessage(text);
    setText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !isComposing) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleComposition = (event) => {
    if (event.type === 'compositionstart') {
      setIsComposing(true);
    }
    if (event.type === 'compositionend') {
      setIsComposing(false);
    }
  };

  return (
    <>
      <motion.button
        className="ml-2 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-1 ring-zinc-400 transition-all duration-200 ease-in-out hover:bg-zinc-400 hover:ring-2 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800"
        type="button"
        aria-label="Message button"
        animate={{
          rotate: isOpen ? 360 : 0,
        }}
        transition={{ duration: 0.1, ease: 'easeIn' }}
        onClick={toggleIcon}
      >
        <BiMessageDetail />
      </motion.button>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog onClose={setIsOpen} className="fixed inset-0 z-20 flex items-center justify-center p-12">
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-500/75 " />
          </Transition.Child>
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative mx-auto w-full max-w-3xl h-[70vh] overflow-hidden rounded-xl bg-zinc-200 shadow-2xl ring-1 ring-black/5 dark:bg-zinc-800">
              <div className="flex flex-col h-full">
                <div ref={nodeRef} className="flex-1 w-full overflow-y-auto bg-white dark:bg-black p-4 rounded-md custom-scrollbar">
                  {messages.length === 0 ? (
                    <p className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                      歡迎來到聊天窗口，有什麼我可以幫助你的嗎？
                    </p>
                  ) : (
                    messages.map((msg, index) => (
                      <div key={index}>
                        <div className={`flex ${msg.sender === 'user' ? 'justify-end' : msg.sender === 'api' ? 'justify-start' : 'justify-center'}`}>
                          <div
                            className={`inline-block p-2 my-2 rounded-md ${msg.sender === 'user' ? 'bg-blue-100 dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 text-left' :  msg.sender === 'api' ? 'bg-gray-100 dark:bg-gradient-to-r dark:from-green-500 dark:to-blue-600 text-left' : ''}`}
                            style={{ maxWidth: '80%', wordBreak: 'break-word' }}
                          >
                            {msg.sender !== 'time' && (
                              <p className="text-gray-800 dark:text-gray-100">{msg.text}</p>
                            )}
                          </div>
                        </div>
                        {msg.sender === 'time' && (
                          <div className="flex justify-center">
                            <p className="text-xs text-gray-500 mb-1">{msg.text}</p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex items-stretch space-x-1 mb-1 py-1 px-1 bg-white dark:bg-black">
                  <textarea
                    ref={textareaRef}
                    className="dark:bg-black border border-gray-300 dark:border-gray-700 rounded-l-md flex-1 py-4 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="輸入消息..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onCompositionStart={handleComposition}
                    onCompositionEnd={handleComposition}
                    style={{ minHeight: '3rem', maxHeight: '24rem' }}
                  />
                  <button
                    className="flex items-center justify-center bg-blue-500 dark:bg-gray-200 text-white dark:text-black font-bold py-2 px-4 rounded-r-md"
                    onClick={handleSubmit}
                    type="button"
                    style={{
                      height: textareaHeight,
                      transition: 'opacity 0.3s ease, box-shadow 1s ease'
                    }}
                  >
                    <IoMdReturnLeft className="text-xl"/>
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}