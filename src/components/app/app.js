import { Component } from 'react';
import styled from 'styled-components';

// import AppInfo from '../app-info/app-info';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import Employeeslist from '../employees-list/employees-list';
// import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    a {
        diplay: block;
        margin: 10px 0 10px 0;
        color: aquamarine;
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 24px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: 'Нажато: ',
            position: '',
        }
    }

    nextYear = () => {
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
            <EmpItem>
                <Button onClick={this.nextYear}>{text}</Button>
                <Header>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />

                </form>
            </EmpItem>
        );
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

function App() {
    return (
        <Wrapper>
            <WhoAmI name='John' surname="Smith" link="ok.ru" />
            <WhoAmI name='Alex' surname="Shepard" link="vk.ru" />
        </Wrapper>

    );
}

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 { name: "John C.", salary: 80000, increase: false, rise: true, id: 1 },
//                 { name: "Alex M.", salary: 100000, increase: true, rise: false, id: 2 },
//                 { name: "Carl W.", salary: 120000, increase: false, rise: true, id: 3 },
//                 { name: "Uma T.", salary: 150000, increase: true, rise: false, id: 4 },
//                 { name: "Ivan P.", salary: 70000, increase: false, rise: true, id: 5 }
//             ],
//             term: '',
//             filter: 'all'
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

//     // Да, пока могут добавляться пустые пользователи. Мы это еще исправим (исправлено в employees-add-form.js в методе onSubmit)
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

//     searchEmp = (items, term) => {
//         if (term.length === 0) {
//             return items;
//         }

//         return items.filter(item => {
//             return item.name.indexOf(term) > -1;
//         });
//     }

//     onUpdateSearh = (term) => {
//         this.setState({ term });
//     }

//     filterPost = (items, filter) => {
//         switch (filter) {
//             case 'rise':
//                 return items.filter(item => item.rise);
//             case 'increase':
//                 return items.filter(item => item.increase);
//             case 'from100000':
//                 return items.filter(item => item.salary >= 100000);
//             default:
//                 return items;
//         }
//     }

//     onFilterSelect = (filter) => {
//         this.setState({ filter });
//     }

//     render() {
//         const { data, term, filter } = this.state;
//         const employees = this.state.data.length;
//         const increased = this.state.data.filter(item => item.increase).length;
//         const visibleData = this.filterPost(this.searchEmp(data, term), filter);

//         const rised = this.state.data.filter(item => item.rise).length;
//         return (
//             <div className="app" >
//                 <AppInfo employees={employees} increased={increased} rised={rised} />

//                 <div className="search-panel">
//                     <SearchPanel onUpdateSearh={this.onUpdateSearh} />
//                     <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
//                 </div>

//                 <Employeeslist
//                     data={visibleData}
//                     onDelete={this.deleteItem}
//                     onToggleProp={this.onToggleProp} />
//                 <EmployeesAddForm onAdd={this.addItem} />
//             </div>
//         );
//     }
// }

export default App;