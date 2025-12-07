// Hook for drag and drop game logic
import { useCallback, useState } from "preact/hooks";
import { CORRECT_ORDER } from "../constants/index.ts";

interface UseDragDropReturn {
  slots: (string | null)[];
  draggedItem: string | null;
  setDraggedItem: (id: string | null) => void;
  dropItem: (slotIndex: number) => void;
  removeFromSlot: (slotIndex: number) => void;
  isInSlot: (itemId: string) => boolean;
  isComplete: boolean;
  isCorrect: boolean;
  reset: () => void;
}

export function useDragDrop(slotCount: number = 5): UseDragDropReturn {
  const [slots, setSlots] = useState<(string | null)[]>(
    Array(slotCount).fill(null),
  );
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const dropItem = useCallback(
    (slotIndex: number) => {
      if (draggedItem === null) return;
      if (slots[slotIndex] !== null) return; // Slot occupied

      setSlots((prev) => {
        const next = [...prev];
        // Remove from previous slot if exists
        const prevIndex = next.indexOf(draggedItem);
        if (prevIndex !== -1) {
          next[prevIndex] = null;
        }
        next[slotIndex] = draggedItem;
        return next;
      });
      setDraggedItem(null);
    },
    [draggedItem, slots],
  );

  const removeFromSlot = useCallback((slotIndex: number) => {
    setSlots((prev) => {
      const next = [...prev];
      next[slotIndex] = null;
      return next;
    });
  }, []);

  const isInSlot = useCallback(
    (itemId: string): boolean => slots.includes(itemId),
    [slots],
  );

  const isComplete = slots.every((slot) => slot !== null);

  const isCorrect = isComplete &&
    slots.every((slot, index) => slot === CORRECT_ORDER[index]);

  const reset = useCallback(() => {
    setSlots(Array(slotCount).fill(null));
    setDraggedItem(null);
  }, [slotCount]);

  return {
    slots,
    draggedItem,
    setDraggedItem,
    dropItem,
    removeFromSlot,
    isInSlot,
    isComplete,
    isCorrect,
    reset,
  };
}
