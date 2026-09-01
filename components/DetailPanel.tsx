"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export default function DetailPanel({
  selectedKey,
  onClose,
  placeholder,
  children,
}: {
  selectedKey: string | null;
  onClose: () => void;
  placeholder: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {/* Desktop: permanent panel on the right */}
      <aside className="hidden md:block w-[42%] shrink-0 self-start">
        <div className="min-w-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedKey ?? "placeholder"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {selectedKey ? children : placeholder}
            </motion.div>
          </AnimatePresence>
        </div>
      </aside>

      {/* Mobile: bottom sheet, only present while something is selected */}
      <AnimatePresence>
        {selectedKey && (
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/60"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-[var(--radius-lg)] border-t border-border bg-bg-elevated"
            >
              <div className="sticky top-0 z-10 flex justify-end bg-bg-elevated p-3">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close details"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-subtle text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
                >
                  <X size={16} strokeWidth={1.75} />
                </button>
              </div>
              <div className="px-4 pb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {children}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
