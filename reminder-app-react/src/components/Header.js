//import React from 'react'//not required now in new react versions
//import PropTypes from 'prop-types';
//can pass props as argument and use it as props.title  or {title , name} and use it as title and name

import Button from './Button'

const Header = ({title , onAdd, showAdd}) => {
    /*const onclick=()=>{
        console.log('click');
    }*/
    return (
        <header className='header'>
             <h1>Task Tracker </h1>
             <Button color={showAdd?'red':'green'} text={showAdd?'CLose':'Add'} onclick={onAdd}/>
        </header>
    )}

// Header.defaultProps ={
//     name:'karan',
// }
// Header.propTypes={
//     title:PropTypes.string.isRequired,
// }


export default Header
