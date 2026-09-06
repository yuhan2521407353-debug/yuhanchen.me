export default function NeuralVisual() {
  return <svg className="neural-visual pointer-events-none absolute right-0 top-1/2 hidden h-[31rem] w-[40rem] -translate-y-1/2 lg:block" viewBox="0 0 640 496" fill="none" aria-hidden="true">
    <g className="neural-lines">
      <path d="M80 336 180 250 276 316 384 205 500 268 576 152" />
      <path d="M104 122 180 250 264 108 384 205 478 92 576 152" />
      <path d="M80 336 218 404 276 316 422 386 500 268" />
      <path d="M180 250 384 205 422 386" />
      <path d="M264 108 276 316 478 92" />
    </g>
    <g className="neural-nodes">
      <circle cx="80" cy="336" r="4" /><circle cx="104" cy="122" r="3" /><circle cx="180" cy="250" r="7" />
      <circle cx="218" cy="404" r="3" /><circle cx="264" cy="108" r="5" /><circle cx="276" cy="316" r="5" />
      <circle cx="384" cy="205" r="8" /><circle cx="422" cy="386" r="4" /><circle cx="478" cy="92" r="3" />
      <circle cx="500" cy="268" r="6" /><circle cx="576" cy="152" r="4" />
    </g>
  </svg>;
}
