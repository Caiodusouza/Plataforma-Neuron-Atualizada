import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';
import "./Cadastro.css";

// Registra o locale em português
registerLocale('pt-BR', ptBR);

const Cadastro = () => {
    const [date, setDate] = useState(null);
    const [placeholder, setPlaceholder] = useState("*Digite sua data de nascimento");
    const [inputValue, setInputValue] = useState('');
    const [showPassword1, setShowPassword1] = useState(false); // Estado para a visibilidade da senha 1
    const [showPassword2, setShowPassword2] = useState(false); // Estado para a visibilidade da senha 2

    const handleDateChange = (input) => {
        const cleanValue = input.replace(/\D/g, ''); // Remove caracteres não numéricos
        let formattedValue = '';

        if (cleanValue.length > 0) {
            formattedValue += cleanValue.substring(0, 2); // Dia
        }
        if (cleanValue.length >= 3) {
            formattedValue += '/' + cleanValue.substring(2, 4); // Mês
        }
        if (cleanValue.length >= 5) {
            formattedValue += '/' + cleanValue.substring(4, 8); // Ano
        }

        // Atualiza a data se for válida
        const parsedDate = new Date(cleanValue.substring(4, 8), cleanValue.substring(2, 4) - 1, cleanValue.substring(0, 2));
        if (!isNaN(parsedDate.getTime())) {
            setDate(parsedDate);
        }

        setInputValue(formattedValue); // Atualiza o estado do valor do input
    };

    return (
        <div className="container-fluid">
            <form className='forms'>
                <div className='titulo'>
                    <h1>Cadastro</h1>
                </div>
                <div className="input-container">
                    <FaUser className='icon' />
                    <input type="text" placeholder='*Digite seu nome completo' />
                </div>
                <div className="input-container">
                    <FaCalendarAlt className='icon' onClick={() => document.getElementById("date-picker").focus()} />
                    <input
                        id="date-picker"
                        value={inputValue}
                        onChange={(e) => handleDateChange(e.target.value)}
                        placeholder={placeholder}
                        onFocus={() => setPlaceholder("*dd/mm/yyyy")}
                        onBlur={() => setPlaceholder("Digite sua data de nascimento")}
                    />
                </div>
                <div className="input-container">
                    <FaEnvelope className='icon' />
                    <input type="email" placeholder='*Digite seu e-mail' />
                </div>
                <div className="input-container">
                    <FaEnvelope className='icon' />
                    <input type="email" placeholder='*Confirme seu e-mail' />
                </div>
                <div className="input-container">
                    <div style={{ position: 'relative', width: '100%' }}>
                        {showPassword1 ? (
                            <FaEyeSlash className='icon icon-eye' onClick={() => setShowPassword1(!showPassword1)} />
                        ) : (
                            <FaEye className='icon icon-eye' onClick={() => setShowPassword1(!showPassword1)} />
                        )}
                        <input 
                            type={showPassword1 ? 'text' : 'password'} // Altera entre texto e senha
                            placeholder='*Crie sua senha' 
                        />
                    </div>
                </div>
                <div className="input-container">
                    <div style={{ position: 'relative', width: '100%' }}>
                        {showPassword2 ? (
                            <FaEyeSlash className='icon icon-eye' onClick={() => setShowPassword2(!showPassword2)} />
                        ) : (
                            <FaEye className='icon icon-eye' onClick={() => setShowPassword2(!showPassword2)} />
                        )}
                        <input 
                            type={showPassword2 ? 'text' : 'password'} // Altera entre texto e senha
                            placeholder='*Confirme sua senha' 
                        />
                    </div>
                </div>
                <div className="link-container">
                    <a href="#">Já possui uma conta?</a>
                </div>
                <button type='submit' className="submit-btn">Finalizar Cadastro</button>
            </form>
        </div>
    );
}
    
export default Cadastro;
