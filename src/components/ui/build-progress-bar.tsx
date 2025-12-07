// Animated progress bar for build output
import { useEffect, useState } from "preact/hooks";

interface BuildProgressBarProps {
  label: string;
  visible: boolean;
  onComplete?: () => void;
}

export function BuildProgressBar({
  label,
  visible,
  onComplete,
}: BuildProgressBarProps) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (visible && !complete) {
      const timer = setTimeout(() => {
        setComplete(true);
        onComplete?.();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visible, complete, onComplete]);

  const lineClass = `rust-build__line ${visible ? "visible" : ""}`;
  const fillClass = `rust-build__progress-fill ${complete ? "complete" : ""}`;

  return (
    <div class={lineClass}>
      <span class="rust-build__prefix rust-build__prefix--building">
        Building
      </span>
      <div class="rust-build__progress">
        <div class="rust-build__progress-bar">
          <div class={fillClass} />
        </div>
        <span class="rust-build__progress-label">{label}</span>
      </div>
    </div>
  );
}
