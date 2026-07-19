export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="sr-only">Kufre Udoh</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        <svg
          viewBox="23 3 62 90"
          className="h-[0.78em] w-auto translate-y-[0.05em] text-accent"
        >
          <path
            d="M32,12 L32,56"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="32" cy="82" r="7" fill="currentColor" />
          <path
            d="M76,12 L32,40 L76,84"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="-ml-[0.05em]">ufre Udoh</span>
      </span>
    </span>
  );
}
