// firebase
import { db } from '../firebase/config'
import { doc , deleteDoc } from 'firebase/firestore'

export default function MemoList({ memos }) {

  const handleClick = async (id) => {
    const ref = doc(db , 'memos',id)
    await deleteDoc(ref)
  }

  return (
    <div className="memo-list">
      <ul>
        {memos.map(memo => (
          <li key={memo.id} onClick={() => handleClick(memo.id)}>{memo.title}</li>
        ))}
      </ul>
    </div>
  )
}