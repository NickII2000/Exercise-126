import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function WhoAmI({ name, surname, link }) {
    return (
        <div>
            <h1>My name is {name.firstName}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <WhoAmI name={() => { return 'John'; }} surname="Smith" link="ok.ru" />
            <WhoAmI name={() => { return 'Alex'; }} surname="Shepard" link="vk.ru" />
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