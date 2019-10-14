import * as React from 'react'

function useKeydownLister(
  cb: (event: KeyboardEvent) => void,
  currentDirection: any,
  currentPos: any
) {
  React.useEffect(() => {
    document.addEventListener('keydown', cb)
    return () => document.removeEventListener('keydown', cb)
  }, [currentDirection, currentPos])
}

export default useKeydownLister
