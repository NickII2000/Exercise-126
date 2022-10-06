import { Component } from 'react';

// import AppInfo from '../app-info/app-info';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import Employeeslist from '../employees-list/employees-list';
// import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// import { Component, Fragment } from 'react';

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

    commitInputChanges = (e, color) => {
        // console.log(e.target.value);
        console.log(color);
        this.setState({
            position: e.target.value
        });
    }

    render() {
        const { name, surname, link } = this.props;
        const { years, text, position } = this.state;

        // console.log(this);

        return (
            <>
                {/* <button onClick={() => this.nextYear()}>{text}</button> */}
                <button onClick={this.nextYear}>{text}</button>
                <h1>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />

                </form>
            </>
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



// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 { name: "John C.", salary: 80000, increase: false, rise: true, id: 1 },
//                 { name: "Alex M.", salary: 100000, increase: true, rise: false, id: 2 },
//                 { name: "Carl W.", salary: 120000, increase: false, rise: false, id: 3 },
//                 { name: "Uma T.", salary: 150000, increase: false, rise: false, id: 4 },
//                 { name: "Ivan P.", salary: 70000, increase: false, rise: false, id: 5 }
//             ]
//         }
//         const { data } = this.state;
//         this.maxId = data.map(item => item.id).reduce((a, b) => a > b ? a : b) + 1;
//     }

//     deleteItem = (id) => {
//         this.setState(({ data }) => {
//             return {
//                 data: data.filter((item) => item.id !== id)
//             };
//         });

//     }

//     // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
//     addItem = (name, salary) => {
//         const newItem = {
//             name,
//             salary,
//             increase: false,
//             rise: false,
//             id: this.maxId++,
//         }
//         this.setState(({ data }) => {
//             const newArr = [...data, newItem];
//             return {
//                 data: newArr
//             }
//         });
//     }

//     onToggleProp = (id, prop) => {
//         this.setState(({ data }) => ({
//             data: data.map(item => (item.id === id) ? { ...item, [prop]: !item[prop] } : item)
//         }));
//     }

//     render() {
//         const employees = this.state.data.length;
//         const increased = this.state.data.filter(item => item.increase).length;
//         const rised = this.state.data.filter(item => item.rise).length;
//         return (
//             <div className="app" >
//                 <AppInfo employees={employees} increased={increased} rised={rised} />

//                 <div className="search-panel">
//                     <SearchPanel />
//                     <AppFilter />
//                 </div>

//                 <Employeeslist
//                     data={this.state.data}
//                     onDelete={this.deleteItem}
//                     onToggleProp={this.onToggleProp} />
//                 <EmployeesAddForm onAdd={this.addItem} />
//             </div>
//         );
//     }
// }

export default App;