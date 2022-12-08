import { useState, useEffect } from 'react'

function useFetchData(url: string) {
  const [data, setData] = useState<string | null>(null)
  const [done, setDone] = useState<boolean | null>(false)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setDone(true)
      })
  })
}

export default function CustomHookComponent() {
  return <div></div>
}
