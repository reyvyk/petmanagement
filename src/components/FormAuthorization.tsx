import React from 'react'

import styles from './FormAuthorization.module.css';

type Props = {
  btnText: string
}

const FormAuthorization = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <h2>Emissão de termos de autorização</h2>
      <div className={styles.input_container}>
        <select name="select">
          <option value="valor1">Cirurgico</option>
          <option value="valor2">Exames</option>
          <option value="valor3">Tratamento</option>
        </select>
      </div>
      <h2>Dados Proprietario</h2>
      <div className={styles.input_container}>
        <label>Nome</label>
        <input type="text" name="nome" placeholder="Nome" />
      </div>
      <div className={styles.input_container}>
        <label>CPF</label>
        <input type="text" name="cpf" placeholder="CPF" />
      </div>
      <div className={styles.input_container}>
        <label>Celular/Telefone</label>
        <input type="text" name="celular" placeholder="Celular/Telefone" />
      </div>
      <div className={styles.input_container}>
        <label>Endereço</label>
        <input type="text" name="endereco" placeholder="Endereço" />
      </div>
      <h2>Dados Pet</h2>
      <div className={styles.input_container}>
        <label>Nome Pet</label>
        <input type="text" name="nomepet" placeholder="Nome do Pet" />
      </div>
      <div className={styles.input_container}>
        <label>Raca</label>
        <input type="text" name="raca" placeholder="Raca" />
      </div>
      <div className={styles.input_container}>
        <label>Pelagem</label>
        <input type="text" name="pelagem" placeholder="Pelagem" />
      </div>
      <div className={styles.input_container}>
        <label>Idade</label>
        <input type="text" name="idade" placeholder="Idade ou Aproximada" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default FormAuthorization;