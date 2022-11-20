import React, { useState } from 'react';
import Affairs from './affairs/Affairs';
import s2 from '../../s1-main/App.module.css';

/*
 * 1 - описать типы AffairPriorityType, AffairType yes
 * 2 - указать нужный тип для defaultAffairs yes
 * 3 - дописать типы и логику функции filterAffairs и проверить её тестами yes
 * 4 - выполнить пункт 3 для функции deleteAffair yes
 * 5 - указать нужный тип в useState с affairs yes
 * 6 - дописать тип и логику функции deleteAffairCallback yes
 * 7 - в файле Affairs.tsx дописать типизацию пропсов yes
 * 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow yes
 * 9 - в файле Affair.tsx дописать типизацию пропсов yes
 * 10 - в файле Affair.tsx дописать функции deleteCallback и использовать yes
 * 11 - в файле Affair.tsx отобразить приходящие данные yes
 * */

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
    _id: number;
    name: string;
    priority: AffairPriorityType;
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    // need to fix any
    { _id: 1, name: 'React', priority: 'high' }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
];

// pure helper functions
export const filterAffairs = (
    affairs: Array<AffairType>,
    filter: FilterType
): Array<AffairType> => {
    switch (filter) {
        case 'all':
            return affairs;
        case 'high':
        case 'middle':
        case 'low':
            return affairs.filter((el) => el.priority === filter);
        // case 'middle':
        //     return affairs.filter((el) => el.priority === 'middle');
        // case 'low':
        //     return affairs.filter((el) => el.priority === 'low');
    }
};
export const deleteAffair = (
    affairs: Array<AffairType>,
    _id: number
): Array<AffairType> => {
    return affairs.filter((el) => el._id !== _id);
    // switch (_id) {
    //     case 1:
    //         return affairs.filter((el) => el._id !== 1);
    //     case 2:
    //         return affairs.filter((el) => el._id !== 2);
    //     case 3:
    //         return affairs.filter((el) => el._id !== 3);
    //     case 4:-
    //         return affairs.filter((el) => el._id !== 4);
    //     case 5:
    //         return affairs.filter((el) => el._id !== 5);
    //     default:
    //         return affairs;
    // }
};

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => {
        setAffairs(affairs.filter((el) => el._id !== _id));
    };

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Hometask № 2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    );
}

export default HW2;
