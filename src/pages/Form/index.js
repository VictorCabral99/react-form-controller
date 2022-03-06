import React, { useState } from "react";
import { Link } from 'react-router-dom';

import FormServices from '../../services/FormServices';

import { Template, Title, ButtonsContainer, FormComponent } from '../../styled-components';
import { Button, DefaultInput, DefaultSelect, MultiSelectInput, SelectSearchInput } from '../../components';

const Form = () => {

    let [formData, setFormData] = useState({});
    const saveNewNote = async (newNote) => {
        const request = await FormServices.saveNewNote(newNote)
        console.log(request);
    }

    function handleSubmit(){
        saveNewNote(formData)
    }

    function handleOnChange(key, value){
        setFormData({
            ...formData,
            [key]: value
        })
    }

    return (
        <Template>
            <Title>Form</Title>
            <FormComponent>
                <DefaultInput      onChange={ (value) => handleOnChange("item1", value) }/>
                <DefaultSelect     onChange={ (value) => handleOnChange("item2", value) }/>
                <MultiSelectInput  onChange={ (value) => handleOnChange("item3", value) }/>
                <SelectSearchInput onChange={ (value) => handleOnChange("item4", value) }/>
            </FormComponent>
            <ButtonsContainer>
                <Button onClick={handleSubmit}/>
                <Link to="/">Voltar</Link>
            </ButtonsContainer>
        </Template>
    )
}

export default Form;