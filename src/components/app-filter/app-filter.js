import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники', colored: false },
        { name: 'rise', label: 'На повышение', colored: false },
        { name: 'increase', label: 'Премированные', colored: false },
        { name: 'from100000', label: 'Зарплата от 100 000 руб. и выше', colored: true }
    ]

    const buttons = buttonsData.map(({ name, label, colored }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={colored ? { color: 'sea' } : null}>
                {label}
            </button >
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div >
    );
}

export default AppFilter;