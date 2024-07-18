import { Table } from '../Table/Table';
import './Header.scss'

export function Header() {
    return( 
        <div className='container-Titulo'>
            <h1>Finances CRUD</h1>
            <Table/>
        </div>
    );
}