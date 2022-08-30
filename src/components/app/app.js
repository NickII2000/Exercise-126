import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        { name: "John C.", salary: 80000, increase: false, id: 1 },
        { name: "Alex M.", salary: 100000, increase: true, id: 2 },
        { name: "Carl W.", salary: 120000, increase: false, id: 3 }
    ];
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <Employeeslist data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;