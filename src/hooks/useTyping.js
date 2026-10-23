import { useEffect, useState } from 'react'

// Efek mengetik + menghapus, berputar di antara beberapa kata.
export default function useTyping(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? deleteSpeed : typeSpeed

    if (!deleting && text === word) delay = pause
    if (deleting && text === '') delay = 350

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(id)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}
