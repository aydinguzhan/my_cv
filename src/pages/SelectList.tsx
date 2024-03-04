import { useState } from 'react';
import { PageButton } from "../component/PageButton";
import { goBack } from "../helper/buttonGroup";
export interface ISelectListProps {
    dataList: any
    setPage: any
}

export function SelectList({ dataList, setPage }: ISelectListProps) {
    const [selectData, setSelectData] = useState<any>({});
    const [popData, setPop] = useState<any>({});
    const [targetData, setTargetData] = useState<any>([]);
    const buttonArray = goBack(setPage);
    return (
        <div className='my-4'>
            <div className='selectList-container'>
                <div className='selectList-header'>
                    <span className='title'>Source List</span>
                    <span className='title'>Target List</span>
                </div>
                <div className='selectList-body'>

                    <div className='selectList-box list'>
                        {dataList.map((item: any, index: any) => {
                            return (
                                <div className={`list-elem ${selectData.id === item.id ? "select-elem" : ""}`} onClick={() => setSelectData(item)}>{[item.ad, item.soyad].join(" ")}</div>
                            )
                        })}
                    </div>
                    <div className='selectList-box'>
                        <div className='selectList-buttons'>
                            <div onClick={() => {
                                setTargetData([...targetData, selectData])
                                setSelectData({})
                            }} className='pi pi-angle-right'></div>
                            <div onClick={() => {
                                const articalData = targetData.filter((item: any) => {
                                    return (
                                        popData.id !== item.id
                                    )
                                })
                                setTargetData(articalData)
                            }} className='pi pi-angle-left' ></div>
                            <div className='pi pi-angle-double-left' onClick={(item: any) => {
                                setTargetData([])

                                setSelectData({})
                                setPop({})
                            }}></div>
                            <div className='pi pi-angle-double-right' onClick={((item: any) => {
                                setTargetData([...dataList])
                                setSelectData({})
                                setPop({})
                            })}></div>
                        </div>
                    </div>
                    <div className='selectList-box list'>
                        {targetData.map((item: any, index: any) => {
                            return (
                                <div className={`list-elem ${popData.id === item.id ? "select-elem" : ""}`} onClick={() => { setPop(item) }}>{[item.ad, item.soyad].join(" ")}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="">
                <PageButton buttonArray={buttonArray} />
            </div>
        </div>
    );
}
