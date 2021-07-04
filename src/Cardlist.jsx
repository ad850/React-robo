import React from 'react';
import List from './List';
import Card from './Card'



const Cardlist = ({ List}) => {


    return (
        <>


            {
                List.map((List) => {

                    return (<Card name={List.name} key={List.id} email={List.email} id={List.id} />)



                })

            }


        </>
    )

}
export default Cardlist;
