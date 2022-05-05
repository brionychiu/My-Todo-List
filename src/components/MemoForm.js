import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { db } from '../firebase/config'
import { collection , addDoc } from 'firebase/firestore'

export default function MemoForm() {
  const [newMemo, setNewMemo] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const ref = collection(db , 'memos')
    await addDoc(ref , {
      title:newMemo,
      uid:user.uid
    })

    setNewMemo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new memo:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewMemo(e.target.value)}
          value={newMemo}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
