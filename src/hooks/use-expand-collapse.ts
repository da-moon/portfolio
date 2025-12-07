// Hook for expand/collapse state management
import { useCallback, useState } from "preact/hooks";

interface UseExpandCollapseReturn {
  expandedIds: Set<string>;
  isExpanded: (id: string) => boolean;
  toggle: (id: string) => void;
  expand: (id: string) => void;
  collapse: (id: string) => void;
  collapseAll: () => void;
}

export function useExpandCollapse(
  initialExpanded: string[] = [],
): UseExpandCollapseReturn {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(initialExpanded),
  );

  const isExpanded = useCallback(
    (id: string): boolean => expandedIds.has(id),
    [expandedIds],
  );

  const toggle = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const expand = useCallback((id: string) => {
    setExpandedIds((prev) => new Set(prev).add(id));
  }, []);

  const collapse = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const collapseAll = useCallback(() => {
    setExpandedIds(new Set());
  }, []);

  return {
    expandedIds,
    isExpanded,
    toggle,
    expand,
    collapse,
    collapseAll,
  };
}
