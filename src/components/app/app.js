import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


import { Component } from 'react';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: 'Нажато: ',
        }
    }

    nextYear = () => {
        console.log('+++');
        // this.setState({
        //     years: this.state.years + 1,
        // });
        this.setState(state => ({
            // years: this.state.years + 1,
            text: this.state.text + '+ ',
        }));
    }

    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div >
        );
    }
}

function App() {
    return (
        <div className="app">
            <WhoAmI name='John' surname="Smith" link="ok.ru" />
            <WhoAmI name='Alex' surname="Shepard" link="vk.ru" />
        </div>

    );
}

// function App() {

//     const data = [
//         { name: "John C.", salary: 80000, increase: false, id: 1 },
//         { name: "Alex M.", salary: 100000, increase: true, id: 2 },
//         { name: "Carl W.", salary: 120000, increase: false, id: 3 }
//     ];
//     return (
//         <div className="app">
//             <AppInfo />

//             <div className="search-panel">
//                 <SearchPanel />
//                 <AppFilter />
//             </div>

//             <Employeeslist data={data} />
//             <EmployeesAddForm />
//         </div>
//     );
// }

export default App;