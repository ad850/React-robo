import React from 'react';
import Header from './Header';
import Search from './Search'
import Cardlist from './Cardlist';
import List from './List';

class App extends React.Component {


    constructor() {

        super();
        this.state = {

            List: List,
            searchfield: ''

        }

    }


    onchange = (event) => {

        this.setState({ searchfield: event.target.value });

    }
    render() {

        const filteredlist = this.state.List.filter(list => {


            return list.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

     return (
            <>
                <Header />
                <Search searchchange={this.onchange} />
                <Cardlist List={filteredlist} />


            </>
        )
    }
}

export default App;
