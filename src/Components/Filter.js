import s from './Phonebook.module.css'
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
    return (
        <>
                <label className={s.labelFilter}> Find contact by name
                     <input
                    type='text'
                    name='filter'
                    value={filter}
                    onChange={onChange}
                    className={s.filter}></input>
                </label>
            </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter