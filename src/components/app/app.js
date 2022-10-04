import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// import { Component } from 'react';

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 27,
//             text: 'Нажато: ',
//             position: '',
//         }
//         // this.nextYear = this.nextYear.bind(this);
//     }

//     // nextYear() {
//     nextYear = () => {
//         // console.log('+++');
//         // this.setState({
//         //     years: this.state.years + 1,
//         // });
//         this.setState(state => ({
//             years: this.state.years + 1,
//             text: this.state.text + '+ ',
//         }));
//     }

//     commitInputChanges = (e, color) => {
//         // console.log(e.target.value);
//         console.log(color);
//         this.setState({
//             position: e.target.value
//         });
//     }

//     render() {
//         const { name, surname, link } = this.props;
//         const { years, text, position } = this.state;

//         // console.log(this);

//         return (
//             <div>
//                 {/* <button onClick={() => this.nextYear()}>{text}</button> */}
//                 <button onClick={this.nextYear}>{text}</button>
//                 <h1>My name is {name}, surname - {surname},
//                     age - {years},
//                     position - {position}</h1>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>
//                     <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />

//                 </form>
//             </div >
//         );
//     }
// }

// function App() {
//     return (
//         <div className="app">
//             <WhoAmI name='John' surname="Smith" link="ok.ru" />
//             <WhoAmI name='Alex' surname="Shepard" link="vk.ru" />
//         </div>

//     );
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 80000, increase: false, rise: true, id: 1 },
                { name: "Alex M.", salary: 100000, increase: true, rise: false, id: 2 },
                { name: "Carl W.", salary: 120000, increase: false, rise: false, id: 3 },
                { name: "Uma T.", salary: 150000, increase: false, rise: false, id: 4 },
                { name: "Ivan P.", salary: 70000, increase: false, rise: false, id: 5 }
            ]
        }
        const { data } = this.state;
        this.maxId = data.map(item => item.id).reduce((a, b) => a > b ? a : b) + 1;
        // console.log(this.maxId);
    }

    deleteItem = (id) => {
        // console.log(id);
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);
            // console.log(index);
            // data.splice(index, 1);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                // data: data.filter((item, i) => i !== index)
                data: data.filter((item) => item.id !== id)
            };
        });

    }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        // console.log(`Increase this ${id}`);
        // this.setState(({ data }) => {
        // const index = data.findIndex(elem => elem.id === id);

        // const old = data[index];
        // const newItem = { ...old, increase: !old.increase };
        // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        // return {
        //     data: newArr
        // };

        // });
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                } //else {
                return item;
                //}
            })
        }));
    }

    onToggleRise = (id) => {
        //console.log(`Rise this ${id}`);
    }

    render() {
        return (
            <div className="app" >
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <Employeeslist
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;