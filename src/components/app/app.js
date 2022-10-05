import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

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
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
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
        this.setState(({ data }) => ({
            data: data.map(item => (item.id === id) ? { ...item, increase: !item.increase } : item)
        }));
    }

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, rise: !item.rise }
                }
                return item;
            })
        }));
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const rised = this.state.data.filter(item => item.rise).length;
        return (
            <div className="app" >
                <AppInfo employees={employees} increased={increased} rised={rised} />

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