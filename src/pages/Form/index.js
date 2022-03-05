import React from "react";
import { Link } from 'react-router-dom';
import { Button, DefaultInput, DefaultSelect, MultiSelectInput, SelectSearchInput } from '../../components';

const Form = () => {
    return (
        <div>
            <h2>Form</h2>
            <div>
                <DefaultInput/>
                <DefaultSelect/>
                <MultiSelectInput/>
                <SelectSearchInput/>
            </div>
            <div>
                <Button/>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}

export default Form;