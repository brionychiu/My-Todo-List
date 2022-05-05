import MemoList from '../components/MemoList'
import MemoForm from '../components/MemoForm'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Home() {
  const { user } = useAuthContext()
  const { documents:memos } = useCollection(
    'memos',
    ['uid','==',user.uid]
    )

  return (
    <div>
      {memos && <MemoList memos={memos} />}
      <MemoForm />
    </div>
  );
}
