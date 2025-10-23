import './App.css'
import { CounterFeature } from './features/counter/CounterFeature'
import { DebounceSearchFeature } from './features/debounce-search/DebounceSearchFeature'
import { TodoFeature } from './features/todo/TodoFeature'

function App() {

  return (
    <>
      <CounterFeature />
      <DebounceSearchFeature/>
      <TodoFeature/>
    </>
  )
}

export default App
