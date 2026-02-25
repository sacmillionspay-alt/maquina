import { useState } from 'react'

export function Logo({ variant = 'light', className = '' }) {
  const [imgError, setImgError] = useState(false)
  const isDark = variant === 'dark'

  return (
    <a
      href="#"
      className={`flex items-center gap-2 transition-opacity duration-200 hover:opacity-90 ${className}`}
    >
      {!imgError ? (
        <img
          src="/logo.png"
          alt="Millionspay"
          className="h-9 w-auto object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <>
          <svg
            width="36"
            height="36"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-hidden
          >
            <path
              d="M8 32V8l8 12 8-12v24h-6V17l-5 7.5-5-7.5v15H8zm24-8h-6v-4h6v4zm0-8h-6V12h6v4z"
              fill="var(--mp-green-light)"
            />
          </svg>
          <span className="font-heading font-bold text-xl tracking-tight">
            <span className={isDark ? 'text-white' : 'text-[var(--mp-green-dark)]'}>Millions</span>
            <span className={isDark ? 'text-[var(--mp-green-light)]' : 'text-[var(--mp-green-medium)]'}>pay</span>
          </span>
        </>
      )}
    </a>
  )
}
