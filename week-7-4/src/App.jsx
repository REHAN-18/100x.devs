import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom, notificationAtom } from './atoms'

import { jobAtom, messagingAtom } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobAtomCount = useRecoilValue(jobAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilState(messagingAtom)
  
  const totalNotificationCount= networkNotificationCount + jobAtomCount + notificationAtomCount
  
  return (
    <>
      <button>Home</button>

      <button> My network ({networkNotificationCount >= 100 ? '99+' : networkNotificationCount}) </button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>


      <button >Me({totalNotificationCount})</button>
    </>
  )
}

export default App
