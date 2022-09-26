import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { constants } from 'fs/promises';

function App() {

    const data = [
        { name: 'John C.', salary: 800 },
        { name: 'Alex M.', salary: 3000 },
        { name: 'Carl W.', salary: 5000 }
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <Employeeslist />
            <EmployeesAddForm />
        </div>
    );
}

export default App;