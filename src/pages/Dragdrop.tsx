import { useState } from 'react';


export interface IDragdropProps {
}

export const mockData: any = [
    {
        id: "item-1",
        label: "JavaScript",

    },
    {
        id: "item-2",
        label: "Nodejs",

    },
    {
        id: "item-3",
        label: "TypeScript",

    },
    {
        id: "item-4",
        label: "NestJs",

    },
    {
        id: "item-5",
        label: "ExpressJs",

    },
    {
        id: "item-6",
        label: "HapiJs",

    },
    {
        id: "item-7",
        label: "ElectronJs",

    }
]


export function Dragdrop(props: IDragdropProps) {
    const [isBlur, setIsBlur] = useState<boolean>(false);
    const [selectItem, setSelectItem] = useState<any>({});
    const [targetList, setTargetList] = useState<any>([]);
    const [sourceList, setSourceist] = useState<any>(mockData);
    const onDragStart = (e: any, item: any, setState: any) => {

        setState()
        setIsBlur(true)


    }
    const onDragOver = (e: any, setState: any) => {
        e.preventDefault()
        if (!targetList.some((item: any) => item.id === selectItem.id)) {
            setState()

        }
        setIsBlur(false)

    }
    const onExternalContainerDragOver = (e: any) => {
        e.preventDefault();
    };

    // Dış konteynerin sürüklenmesini engelleyen işlev
    const onExternalContainerDrop = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className={"my-4"} >
            <div className='drag-drop-header'>
                <span>Source</span>
                <span>Target</span>
            </div>
            <div className='drag-drop-container'>
                <div className='drag-drop-left'>
                    {sourceList.map((item: any) => {
                        return <div draggable
                            onDragStart={(e: any) => onDragStart(e, item, () => { setSelectItem(item) })}
                            onDragOver={(e: any) => onDragOver(e, () => {

                            })}
                            className={`${isBlur && "blur"} drag-drop-box `}
                            onDragEnd={(e: any) => { setSelectItem({}); setIsBlur(false); }}>
                            {item.label}
                        </div>
                    })}



                </div>
                <div className='drag-drop-right' onDragOver={(e: any) => onDragOver(e, () => {
                    setTargetList([...targetList, selectItem]);

                    let newData = sourceList?.filter((i: any) => i.id !== selectItem.id);
                    setSourceist(newData)
                })}>
                    {targetList?.map((item: any) => {
                        return (
                            <div className='drag-drop-box'>{item.label}</div>
                        )
                    })}

                </div>
            </div>
        </div >
    );
}
