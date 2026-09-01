import { useEffect, useState } from 'react'

function useMinDelay(delay: number, jitter: number = 0, resetKey: string | null = '') {
  const [ready, setReady] = useState(false)
  const [deps, setDeps] = useState({ delay, jitter, resetKey })

  if (deps.delay !== delay || deps.jitter !== jitter || deps.resetKey !== resetKey) {
    setDeps({ delay, jitter, resetKey })
    setReady(false)
  }

  useEffect(() => {
    // Number between [-1, 1] * jitter
    const offset = (Math.random() * 2 - 1) * jitter
    const duration = Math.max(0, delay + offset)
    const timer = setTimeout(() => setReady(true), duration)

    return () => clearTimeout(timer)
  }, [delay, jitter, resetKey])

  return { ready }
}

export { useMinDelay }
