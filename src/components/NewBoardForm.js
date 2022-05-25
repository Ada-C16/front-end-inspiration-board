import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ({addBoardCallback, isBoardFormVisible, updateBoardFormVisibility}) => {
  const buttonVisible = isBoardFormVisible ? 'visible' : 'hidden';
  const buttonName = isBoardFormVisible ? 'Hide' : 'Show';

  const [formFields, setFormFields] = useState ({
    title: '',
    owner: ''
  });
  
  const onTitleChange = (event) => {
    setFormFields({
        ...formFields,
        title: event.target.value
    })
  };
  
  const onOwnerChange = (event) => {
    setFormFields({
        ...formFields,
        owner: event.target.value
    })
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();
  
          addBoardCallback({
              title: formFields.title,
              owner: formFields.owner
          });
  
          setFormFields({
              title: '',
              owner: '',
          });

  };
  
    return (
      <>  
        <section className="form-section">
          <h2 className='add-board'>Add A New Board</h2>
          
          <form className={buttonVisible} onSubmit={onFormSubmit}>
              <label htmlFor="title"></label>
              <input 
                className="title-input" 
                name="title"
                placeholder='BOARD TITLE'
                value={formFields.title} 
                onChange={onTitleChange} />
                
              <label htmlFor="owner" ></label>
              <input 
                class="owner-input"
                name="owner"
                placeholder='OWNER'
                value={formFields.owner} 
                onChange={onOwnerChange} />
                
              <input className='submit-button'
                  type="submit"
                  value="+ add board" />
          </form>
        
          <button className='hide-button' onClick={updateBoardFormVisibility}>
                {buttonName} New Board Form
          </button>
        </section>
      </>
    );
  };

  NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
  };
  
  export default NewBoardForm;