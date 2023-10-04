
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import  { Luz }  from './Luz';

export const Sinalizacao = ({color}) => {

  const [idAtual, setIdAtual] = useState('');

  function handleClick(id) {
    setIdAtual(id);
  }

  return (
    <>
    <div className='sinalizacao'>
      {color.map(({id, color, nome}) => (
        <Luz 
          key={id} 
          color={color} 
          nome={nome} 
          ligado={id === idAtual }
          onCLick={() => setIdAtual(id)} 
        />
      ))
      }
    </div>
      <div className='poste-sinalizacao' />
      </>
  )
}

Sinalizacao.propTypes = {
  color: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
  })).isRequired
};