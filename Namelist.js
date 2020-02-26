import React from 'react';
function Namelist(){
    const names=[{
        id:1,
        name:'ramna',
        age:20
    },
    {
        id:2,
        name:'balu',
        age:30
    },]
    const namelist=names.map(data=><h2>{data.name}</h2>)
return <div>{namelist}</div>
}

export default Namelist