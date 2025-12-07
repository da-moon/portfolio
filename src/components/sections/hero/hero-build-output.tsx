// Rust-style build output animation with terminal chrome (Desktop only)
import { useCallback, useEffect } from "preact/hooks";
import { UI } from "../../../constants/index.ts";
import { BuildLine, BuildProgressBar } from "../../ui/index.ts";
import { useBuildAnimation } from "../../../hooks/index.ts";

interface HeroBuildOutputProps {
  onComplete?: () => void;
}

const LINE_IDS = [
  "compiling",
  "building",
  "link-1",
  "link-2",
  "link-3",
  "link-4",
  "finished",
  "running",
];

export function HeroBuildOutput({ onComplete }: HeroBuildOutputProps) {
  const { isLineVisible, startAnimation, isComplete } = useBuildAnimation(
    LINE_IDS,
  );
  const { buildOutput } = UI.hero;

  const runAnimation = useCallback(async () => {
    await startAnimation(LINE_IDS, 300);
    onComplete?.();
  }, [startAnimation, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      runAnimation();
    }, 500);
    return () => clearTimeout(timer);
  }, [runAnimation]);

  return (
    <div class="terminal">
      {/* Terminal chrome - title bar with dots */}
      <div class="terminal__chrome">
        <div class="terminal__dots">
          <span class="terminal__dot terminal__dot--red" />
          <span class="terminal__dot terminal__dot--yellow" />
          <span class="terminal__dot terminal__dot--green" />
        </div>
        <div class="terminal__title">damoon@cloud:~/portfolio</div>
        <div class="terminal__dots-spacer" />
      </div>

      {/* Terminal content */}
      <div class="terminal__content">
        <div class="terminal__command">
          <span class="terminal__prompt">$</span>
          <span class="terminal__cmd">cargo build --release</span>
        </div>

        <div class="rust-build">
          <BuildLine
            prefix="Compiling"
            prefixType="compiling"
            text={buildOutput.compiling.replace("Compiling ", "")}
            visible={isLineVisible("compiling")}
          />
          <BuildProgressBar
            label={buildOutput.buildingLabel}
            visible={isLineVisible("building")}
          />
          {buildOutput.linking.map((link, i) => (
            <BuildLine
              key={link}
              prefix="Linking"
              prefixType="linking"
              text={link}
              visible={isLineVisible(`link-${i + 1}`)}
            />
          ))}
          <BuildLine
            prefix="Finished"
            prefixType="finished"
            text={buildOutput.finished.replace("Finished ", "")}
            visible={isLineVisible("finished")}
          />
          <BuildLine
            prefix="Running"
            prefixType="running"
            text={buildOutput.running.replace("Running ", "")}
            highlight
            visible={isLineVisible("running")}
          />
        </div>

        {/* Blinking cursor at the end */}
        {isComplete && (
          <div class="terminal__cursor-line">
            <span class="terminal__prompt">$</span>
            <span class="terminal__cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
