import { List } from "react-window";
import { type RowComponentProps } from "react-window";
 
export function Test({ names }: { names: string[] }) {
  return (
      <List
        rowComponent={RowComponent}
        rowCount={names.length}             // use full length
        rowHeight={25}                      // pixel height of each row
        rowProps={{ names }}
      />
  );
}

function RowComponent({
  index,
  names,
  style
}: RowComponentProps<{
  names: string[];
}>) {
  return (
    <div className="flex items-center justify-between" style={style}>
      {names[index]}
      {/* <div className="text-slate-500 text-xs">{`${index + 1} of ${names.length}`}</div> */}
    </div>
  );
}