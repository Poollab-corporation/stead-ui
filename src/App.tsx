import './globalTheme.css'
import { NavigationTabs } from './lib'
import { TabButtonType } from './lib/components/NavigationTabs/NavigationTabs.interface'
import { Dropdown } from './lib'

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
        <NavigationTabs buttons={BUTTONS} contents={CONTENTS} />
      </div>
      <Dropdown button={<button>Dropdown</button>}>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default App
