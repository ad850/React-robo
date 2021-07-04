import React from 'react';
import List from './List';
import Card from './Card'



const Cardlist  = () => {


    return (
        <>
           

            {
                List.map((props) => {

                    return (<  Card name={props.name} key={props.id} email={props.email} id={props.id} />)



                })

            }


        </>
    )

}
export default Cardlist;