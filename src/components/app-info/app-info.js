import './app-info.css';

const AppInfo = ({ increased, employees, rised }) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании "Добрый вечер"</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
            <h2>Идут на повышение: {rised}</h2>
        </div>
    );
}

export default AppInfo;