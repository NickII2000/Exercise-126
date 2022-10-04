import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const Employeeslist = ({ data, onDelete }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;

        // console.log(`id = ${id}`);
        // console.log(itemProps);
        // console.log({ ...itemProps });

        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(`id#${id} - Deleted`)} />
            // onDelete={() => console.log(`id#${id} - Deleted`)} />
        );
    });

    console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default Employeeslist;