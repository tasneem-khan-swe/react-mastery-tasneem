import './App.css'
import { DebounceSearchFeature } from './features/debounce-search/DebounceSearchFeature'
import { TodoFeature } from './features/todo/TodoFeature'

function App() {

  return (
    <>
      <DebounceSearchFeature/>
      <TodoFeature/>
    </>
  )
}

export default App
