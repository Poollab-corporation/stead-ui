import './globalTheme.css'
import { AvatarMultiple, Button, Tooltip } from './lib'

function App() {
  return (
    <div>
      <h1>STEAD UI</h1>
      <AvatarMultiple members={[]} />
      <Tooltip text="?">
        <Button text={'Click me'} />
      </Tooltip>
    </div>
  )
}

export default App
