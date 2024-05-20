import './globalTheme.css'
import { Select } from './lib/components/Selects'

function App() {
  return (
    <div>
      <h1>STEAD UI</h1>
      <Select options={[{ label: 'test', value: 'test' }]} />
    </div>
  )
}

export default App
