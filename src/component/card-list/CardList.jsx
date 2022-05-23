import React from 'react';
// import PropTypes from 'prop-types';
import './card-list.scss'
import Card from '../card/Card';

const CardList = ({className}) => {

   
    return (
        <>
            <section className={`cards ${className}`} >
                <Card className='charizard' />
                <Card className="pika" />
                <Card className="eevee" />
                <Card className="mewtwo" />
            </section>
         </>
    );
};

// CardList.propTypes = {
    
// };

export default CardList;