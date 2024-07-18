import './Table.scss'

export function Table(){
    return(
        <div className='container-tabela'>
            <form action="" method='get'>
                <label htmlFor="fname">Nome: </label>
                <input type="text" id='fname' name='fname'/>

                <label htmlFor="wage">Salário: </label>
                <input type="number" id='wage' name='wage'/>

                <label htmlFor="exits">Saídas</label>
                <input type="number" id='exits' name='exits'/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}