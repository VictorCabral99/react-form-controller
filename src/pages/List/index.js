import React from "react";
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <div>
            <h2>List</h2>
            <div>
                <Link to="/Form/new">Adicionar</Link>
                <Link to="/Form/1">Editar</Link>
            </div>
        </div>
    );
}

export default List;