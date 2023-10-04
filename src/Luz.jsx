import PropTypes from 'prop-types';

export const Luz = ({id,color, ligado, nome, onCLick}) => {
  return (
    <div 
      id={id}
      className={`sinalizacao_luz ${ligado ? 'sinalizacao_luz--ligado': '' }`} 
      style={{ backgroundColor: color }} 
      onClick={onCLick} 
    />

  )
}

Luz.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  ligado: PropTypes.bool.isRequired,
  nome: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired 
};