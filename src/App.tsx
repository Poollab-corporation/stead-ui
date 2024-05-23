import React from 'react'
import './globalTheme.css'
import { Label } from './lib/components/Label'

function App() {
  return (
    <div>
      <div style={{ padding: '40px' }}>
        <h1>STEAD UI</h1>
      </div>
      <div style={{ padding: '40px', backgroundColor: 'lightgray' }}>
        <Label label="라벨 Label" isRequired hasInfo />
      </div>
    </div>
  )
}

export default App
