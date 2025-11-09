import VirtualList from "./components/VirtualList";

export function VirtualizedList() {
  const list=Array.from({length:10_000},(_,i)=>`item ${i}`)
  return (
    <div style={{ height: 200 }} className="m-3 p-5 border-2 border-gray-50">
      {/* <h3 className="text-2xl mb-2">Simple Virtualized List — 10,000 items</h3> */}
      <VirtualList list={list}/>
    </div>
  );
}
