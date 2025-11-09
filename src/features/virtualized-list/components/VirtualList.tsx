// import { useRef, useState, useEffect, useMemo } from "react";
/**
 * props:
 * - items: array of strings (or objects)
 * - itemHeight: number (px) height of each row
 * - height: number (px) height of the scroll container
 * - buffer: number of extra items to render above & below the viewport (optional)
 */
// export default function VirtualList({ items=[""], itemHeight = 30, height = 300, buffer = 5 }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [scrollTop, setScrollTop] = useState(0);

//   const totalHeight = items.length * itemHeight;

//   const visibleCount = Math.ceil(height / itemHeight);

//   // compute start and end indices
//   const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
//   const endIndex = Math.min(items.length - 1, startIndex + visibleCount + buffer * 2);

//   const visibleItems = useMemo(
//     () => items.slice(startIndex, endIndex + 1),
//     [items, startIndex, endIndex]
//   );

//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;
//     const onScroll = () => setScrollTop(el.scrollTop);
//     el.addEventListener("scroll", onScroll, { passive: true });
//     return () => el.removeEventListener("scroll", onScroll);
//   }, []);

//   // top offset for the inner rendered block
//   const offsetY = startIndex * itemHeight;

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         height: `${height}px`,
//         overflowY: "auto",
//         border: "1px solid #ccc",
//       }}
//     >
//       {/* spacer element gives the full scroll height */}
//       <div style={{ height: `${totalHeight}px`, position: "relative" }}>
//         {/* inner block positioned at offsetY, contains only visible items */}
//         <div
//           style={{
//             position: "absolute",
//             top: `${offsetY}px`,
//             left: 0,
//             right: 0,
//           }}
//         >
//           {visibleItems.map((item, i) => (
//             <div
//               key={startIndex + i}
//               style={{
//                 height: `${itemHeight}px`,
//                 display: "flex",
//                 alignItems: "center",
//                 paddingLeft: 8,
//                 boxSizing: "border-box",
//                 borderBottom: "1px solid #f0f0f0",
//                 fontSize: 13,
//               }}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { List } from "react-window";
import { type RowComponentProps } from "react-window";
 
export default function VirtualList({ list }: { list: string[] }) {
  return (
      <List
        rowComponent={RowComponent}
        rowCount={list.length}             // use full length
        rowHeight={25}                      // pixel height of each row
        rowProps={{ list }}
      />
  );
}

function RowComponent({index, list,style}: RowComponentProps<{list: string[]}>) {
  return (
    <div className="flex items-center justify-between" style={style}>
      {list[index]}
      {/* <div className="text-slate-500 text-xs">{`${index + 1} of ${names.length}`}</div> */}
    </div>
  );
}