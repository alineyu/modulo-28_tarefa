import { useState } from 'react';
import '../Form/Form.module.css'

const Form = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');

    const calcIMC = () => {
        const imc = (weight / (height * height)).toFixed(2);
        return setResult(imc)
    }


    return (
        <form className='rounded'>
            <div className='mb-3'>
                <label className='form-label text-warning h3'>Peso</label>
                <input 
                placeholder='44'
                type="number" 
                className='form-control w-25 mx-auto'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label text-warning h3'>Altura</label>
                <input 
                placeholder='1.57'
                type="number" 
                className='form-control w-25 mx-auto' 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button 
            type='button' 
            className='btn btn-warning text-light mt-3'
            onClick={(e) => {
                e.preventDefault();
                (height && weight) ? calcIMC() : alert('Por favor, digite um número');
                showResult()
            }}
            >Calcular</button>


            {result && (
                <div className='mt-4'>
                    <p>Seu IMC: <b>{result}</b> </p>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'> Menor que 18,5:	Baixo peso </li>
                        <li className='list-group-item'> 18,5 a 24,9:	Peso normal </li>
                        <li className='list-group-item'> 25 a 29,9:	Sobrepeso </li>
                        <li className='list-group-item'> 30 a 34,9:	Obesidade grau I </li>
                        <li className='list-group-item'> 35 a 39.9:	Obesidade grau II </li>
                        <li className='list-group-item'> Igual ou maior que 40:	Obesidade grau III</li>
                    </ul>
                </div>
        
            )}
    
        
        </form>
    )
}

export default Form;