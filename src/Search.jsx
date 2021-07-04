import React from 'react';

const Search = ({searchchange,searchfield}) => {



   



    return (


        <div className="search">
            <input type="search" placeholder="Search for friend" onChange={searchchange} />
        </div>


    )


}

export default Search;
