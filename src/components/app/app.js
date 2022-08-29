import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function WhoAmI(props) {
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="ok.ru" />
        </div>
        // <div className="app">
        //     <AppInfo />

        //     <div className="search-panel">
        //         <SearchPanel />
        //         <AppFilter />
        //     </div>

        //     <Employeeslist />
        //     <EmployeesAddForm />
        // </div>
    );
}

export default App;