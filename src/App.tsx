import './App.css'
import { CounterFeature } from './features/counter/CounterFeature'
import { DebounceSearchFeature } from './features/debounce-search/DebounceSearchFeature'
import { NestedCheckboxesFeature } from './features/nested-checkboxes/NestedCheckboxesFeature'
import { TodoFeature } from './features/todo/TodoFeature'
import { VirtualizedList } from './features/virtualized-list/VirtualizedList'
import { WeatherFeature } from './features/weather/WeatherFeature'

function App() {
  return (
    <>
    <NestedCheckboxesFeature />
    <VirtualizedList/>
      <CounterFeature />
      <DebounceSearchFeature/>
      <TodoFeature/>
      <WeatherFeature/>
    </>
  )
}



export default App
