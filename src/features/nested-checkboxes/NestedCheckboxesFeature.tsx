// 1. import and types
import { useMemo, useState, type Dispatch, type SetStateAction } from "react"
// 3. Build Parent Map i.e. flat object like: {1: null, 2: {id:1,...}}
const buildParentMap = (data: ICheckboxItem[], parent: ICheckboxItem | null = null, map: IMap = {}) => {
    data?.forEach((node: ICheckboxItem) => {
        map[node?.id] = parent;
        if (Array.isArray(node?.children) && node.children.length > 0) {
            buildParentMap(node.children, node, map);
        }
    });
    //   console.log("Parent Map:", map);
    return map;
};
// 2. Component Hierarchy a. [Main component]
export const NestedCheckboxesFeature = () => {
    const [checked, setChecked] = useState<InitialState>({})
    const parentMap = useMemo(() => buildParentMap(checkboxesData), []);
    return (
        <>
            <h2>Nested Checkboxes Feature</h2>
            <Checkboxes data={checkboxesData} checked={checked} setChecked={setChecked}
                parentMap={parentMap}
            />
        </>
    )
}
// 2. b. [Child Component]
const Checkboxes: React.FC<ICheckboxProps> = ({ data, checked, setChecked, parentMap }) => {
    // 3. Purpose (handle checkbox change, update children and parent checkboxes)
    const handleCheckbox = (node: ICheckboxItem, isChecked: boolean) => {
        setChecked((prev) => {
            // update current node
            const newState = { ...prev, [node?.id]: isChecked };
            // if node is checked, check all its 'children'
            const descendantsCheck = (parent: ICheckboxItem) => {
                newState[parent?.id] = isChecked;
                parent?.children?.forEach(descendantsCheck);
            };
            descendantsCheck(node);
            // if node is checked, check the 'parent' if all the parents children are checked
            const checkAncestor = (currentNode: ICheckboxItem) => {
                const parent = parentMap?.[currentNode?.id];
                if (!parent) return;
                const isChildrenChecked = parent?.children?.every(
                    (child) => newState[child?.id]
                );
                newState[parent?.id] = isChildrenChecked || false;
                checkAncestor(parent);
            };
            checkAncestor(node);
            return newState;
        });
    }
    return (
        <div className="pl-5">
            {data.map((item: ICheckboxItem) => (
                <div key={item.id}>
                    <input type="checkbox"
                        checked={!!checked?.[item.id]}
                        onChange={(e) => handleCheckbox(item, e.target.checked)}
                    />
                    <span className="ml-2">{item.name}</span>
                    {item.children && <Checkboxes data={item.children} checked={checked} setChecked={setChecked} parentMap={parentMap} />}
                </div>
            ))}
        </div>)
}

// 1. b. Types
interface IMap {
    [key: number]: ICheckboxItem | null;
}
interface InitialState {
    [key: number]: boolean;
}
interface ICheckboxProps {
    data: ICheckboxItem[];
    checked: InitialState;
    setChecked: Dispatch<SetStateAction<InitialState>>;
    parentMap?: { [key: number]: ICheckboxItem | null };
}
interface ICheckboxItem {
    id: number;
    name: string;
    checked: boolean;
    children?: ICheckboxItem[];
}
export const checkboxesData: ICheckboxItem[] = [
    {
        id: 1,
        name: 'Electronics',
        checked: true,
        children: [
            {
                id: 2,
                name: 'Mobile phones',
                checked: false,
                children: [
                    {
                        id: 3,
                        name: 'iPhone',
                        checked: true,
                    },
                    {
                        id: 4,
                        name: 'Android',
                        checked: false,
                    },
                ],
            },
            {
                id: 5,
                name: 'Laptops',
                checked: false,
                children: [
                    {
                        id: 6,
                        name: 'MacBook',
                        checked: false,
                    },
                    {
                        id: 7,
                        name: 'Surface Pro',
                        checked: false,
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        name: 'Books',
        checked: false,
        children: [
            {
                id: 9,
                name: 'Fiction',
                checked: false,
            },
            {
                id: 10,
                name: 'Non-fiction',
                checked: false,
            },
        ],
    },
    {
        id: 11,
        name: 'Toys',
        checked: false,
    },
];