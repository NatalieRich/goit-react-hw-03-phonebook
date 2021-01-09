import React, { Component } from 'react'
import s from './Phonebook.module.css'
import PropTypes from 'prop-types';



class InputContacts extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state);

    this.reset();
    };
    
   reset = () => {
    this.setState({ name: '', number: '' });
  };

    render() {
        const { name, number } = this.state
  
        return (
             <div>
            <form onSubmit={this.handleSubmit} className={s.form}>
                    <label className={s.formLabel} > 
                        Name
                     <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            className={s.input}></input>
                </label>
               
                    <label className={s.formLabel} >
                        Number
                     <input
                            type='text'
                            name='number'
                            value={number}
                            onChange={this.handleChange}
                            className={s.input}></input>
                </label>
                
                <button type='submit' className={s.button}>Ad contact</button>
                </form>
                
                
        </div>
        )
    }
}

InputContacts.protTypes = {
    submit: PropTypes.func.isRequired,
}


export default InputContacts