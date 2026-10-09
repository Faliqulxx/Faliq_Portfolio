"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { ChatMessageData } from "./useChat";
import TypingIndicator from "./TypingIndicator";
import { renderMessageContent } from "./formatMessage";

import { IoSparkles } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function ChatMessage({ message }: { message: ChatMessageData }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs shadow-sm mt-0.5 ${
          isUser
            ? "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
            : "bg-neutral-900 text-white dark:bg-white dark:text-black"
        }`}
      >
        {isUser ? <FaUser className="text-[10px]" /> : <IoSparkles className="text-[11px]" />}
      </div>

      <div
        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-neutral-900 text-white dark:bg-white dark:text-black rounded-tr-xs"
            : "bg-neutral-100 text-neutral-900 dark:bg-[#181818] dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 rounded-tl-xs shadow-sm"
        }`}
      >
        {message.content ? renderMessageContent(message.content) : <TypingIndicator />}
      </div>
    </motion.div>
  );
}

// Messages before the last one never change identity while streaming (only
// the final assistant bubble's content updates), so memo lets React skip
// re-rendering the whole scrollback on every streamed chunk.
export default memo(ChatMessage);


