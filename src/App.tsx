import React from 'react'
import './globalTheme.css'
import { NavigationTabs } from './lib/components/NavigationTabs'
import { TabButtonType } from './lib/components/NavigationTabs/NavigationTabs.interface'

function App() {
  const BUTTONS: TabButtonType[] = [
    {
      label: '첫 번째 버튼',
      icon: 'icon/list-solid',
    },
    {
      label: '두 번째 버튼',
      icon: 'icon/list-solid',
    },
    {
      label: '세 번째 버튼',
      icon: 'icon/list-solid',
    },
  ]

  const CONTENTS = [
    { content: <div>첫 번째 컨텐츠</div> },
    { content: <div>두 번째 컨텐츠</div> },
    { content: <div>세 번째 컨텐츠</div> },
  ]

  return (
    <div>
      <div style={{ padding: '40px' }}>
        <h1>STEAD UI</h1>
      </div>
      <div style={{ padding: '40px', width: '600px' }}>
        <NavigationTabs>
          <NavigationTabs.TabButtonList buttons={BUTTONS} />
          <NavigationTabs.TabContentList contents={CONTENTS} />
        </NavigationTabs>
      </div>
    </div>
  )
}

export default App
