// HCL lifecycle block
export function HclBlockLifecycle() {
  return (
    <div class="hcl-block__lifecycle">
      <div class="hcl-block__lifecycle-header">
        lifecycle {"{"}
      </div>
      <div class="hcl-block__body">
        <div class="hcl-block__property">
          <span class="hcl-block__prop-name">create_before_destroy</span>
          <span class="hcl-block__prop-equals">=</span>
          <span class="hcl-block__prop-value hcl-block__prop-value--keyword">
            true
          </span>
        </div>
      </div>
      <div class="hcl-block__lifecycle-comment"># Always learning</div>
      <span class="hcl-block__bracket">{"}"}</span>
    </div>
  );
}
