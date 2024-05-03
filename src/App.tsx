import { Warning } from './lib'
import './globalTheme.css'

function App() {
  return (
    <div>
      <h1>STEAD UI</h1>
      <Warning title={'Warning'} description={'This is a warning message'} subDescription={'This is a sub description'} />/
    </div>
  )
}

export default App
