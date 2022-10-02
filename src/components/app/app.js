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
            position: '',
        }
        // this.nextYear = this.nextYear.bind(this);
    }

    // nextYear() {
    nextYear = () => {
        // console.log('+++');
        // this.setState({
        //     years: this.state.years + 1,
        // });
        this.setState(state => ({
            years: this.state.years + 1,
            text: this.state.text + '+ ',
        }));
    }

    commitInputChanges = (e) => {
        // console.log(e);
        // console.log(e.target.value);
        this.setState(state => ({
            position: e.target.value,
        }));
    }

    render() {
        const { name, surname, link } = this.props;
        const { years, text, position } = this.state;

        console.log(this);

        return (
            <div>
                {/* <button onClick={() => this.nextYear()}>{text}</button> */}
                <button onClick={this.nextYear}>{text}</button>
                <h1>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />

                </form>
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