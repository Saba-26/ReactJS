import React, { createElement } from 'react'

const Hello=()=>{
    // return (
    //     <div>
    //         <h1>Hello Saba</h1>
    //     </div>
    // )

    return createElement('div',{id:'key', className:'name'},
    createElement('h1',null,'Hello Saba'));
}

export default Hello