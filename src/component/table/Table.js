import React from 'react'
//import Data from './Data'

import TableHeader from './TableHeader'
import TableBody from './TableBody';

const Table = ({datas}) =>{
    return (
            <div>
                <table className="striped responsive-table">
                    < TableHeader/>
                        { datas && datas.map(data =>{
                            return (<TableBody data={data} key={data.id}/>);
                        })}
                </table>
            </div>
        )
    
}

export default Table
