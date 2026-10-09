"use client";

import { motion } from "framer-motion";

export default function ClearChatDialog({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="clear-chat-title"
      aria-describedby="clear-chat-description"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[280px] rounded-2xl bg-white p-5 text-center shadow-2xl dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800"
      >
        <p id="clear-chat-title" className="text-sm font-semibold text-neutral-900 dark:text-white">
          Clear this conversation?
        </p>
        <p
          id="clear-chat-description"
          className="mt-1 text-xs text-neutral-600 dark:text-neutral-400"
        >
          This action cannot be undone.
        </p>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            autoFocus
            className="flex-1 rounded-full border border-neutral-300 py-2 text-xs font-medium text-neutral-800 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 rounded-full bg-neutral-900 py-2 text-xs font-medium text-white transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Clear Chat
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
