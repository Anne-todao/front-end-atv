import styles from './CardFuncionario.module.css';

const CardFuncionario = ({ dados }) => {
  return (
    <div className={styles.card}>
      <img 
        src={dados.foto} 
        alt={`Foto de ${dados.nome}`} 
        className={styles.foto} 
      />
      <div className={styles.info}>
        <h3 className={styles.nome}>{dados.nome}</h3>
        <p className={styles.cargo}>{dados.cargo}</p>
      </div>
    </div>
  );
};

export default CardFuncionario;