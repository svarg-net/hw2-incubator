import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = string // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// type typeListQuestions = Array<typeQuest>
// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => { // need to fix any
    switch (filter) {
        case 'all':
            return affairs
        case 'low':
            return affairs.filter(x=>x.priority==='low')
        default:
            return affairs
    }
    // if (filter === 'all') return affairs
    //     else if () return
    // else return affairs// need to fix
}
export const deleteAffair = (affairs: any, _id: any): any => { // need to fix any
    return // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: any) => setAffairs(deleteAffair(affairs, _id)) // need to fix any
console.log('HW2')
    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
