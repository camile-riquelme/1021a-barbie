import React, { useState } from 'react';
import './Contato.css';

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
};

function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

return (
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      <form>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />

        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Telefone:</label>
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />

        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
        />
      </form>

      <div className="feedback">
        <p>Nome digitado: {formData.nome}</p>
        <p>E-mail digitado: {formData.email}</p>
        <p>Telefone digitado: {formData.telefone}</p>
        <p>Endereço digitado: {formData.endereco}</p>
      </div>
    </div>
  );
}

export default Contato;