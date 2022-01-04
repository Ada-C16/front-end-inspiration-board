import React, { useState } from 'react';

const CardForm = () => {
    const [values, setValues]  = useState({
        message: ''
    });

    const onChange = (name) => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({ ...oldValues, [name]: value }));
            console.log(values)
        }
    }; 

    const saveFormData = () => {
        console.log(values)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        saveFormData();
        console.log('success');
        setValues({message: ''});
    };

    return (
        <div>
            Card form
            <form onSubmit={onSubmit}>
                <label>Message
                    <input
                        name='message' 
                        type='text' 
                        value={values.message} 
                        onChange={onChange('message')}>
                    </input>
                </label>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default CardForm;