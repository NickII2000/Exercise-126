import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const Employeeslist = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="John C." salary={80000} />
            <EmployeesListItem name="Alex M." salary={100000} />
            <EmployeesListItem name="Carl W." salary={120000} />
        </ul>
    );
}

export default Employeeslist;