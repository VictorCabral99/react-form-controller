import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import FormServices from '../../services/FormServices';

import { Template, Title, ButtonsContainer } from '../../styled-components';
import { Table } from '../../components';

const List = () => {
    let [notes, setNotes] = useState([]);

    useEffect(()=>{
        getAllNotes();
    },[])

    const getAllNotes = async () => {
        const request = await FormServices.getAllNotes();
        setNotes(request.notes);
    }

    return (
        <Template>
            <Title>List</Title>
            <Table data={notes}/>
            <ButtonsContainer>
                <Link to="/Form/new">Adicionar</Link>
                <Link to="/Form/1">Editar</Link>
            </ButtonsContainer>
        </Template>
    );
}

export default List;