import { useState } from "react";
import { calcResult } from "../../../helpers/calcular";
import { Calc } from "./Calc";

const operaciones = ['÷','*','-','+','='];

const Calculadora=():JSX.Element=>{

    const [result,setResult] =useState<string>('0');


    const handleResult=(event:any) =>{
        event.preventDefault();
        // console.log(typeof event.target.innerHTML);
        const value=event.target.innerHTML;
        // console.log(typeof value);
        // const latestOperaciones= operaciones[operaciones.length-1];
        const lastLetter=result[result.length-1];

        if(event.target.id==='calc') return null;

        if(value =='C') return setResult('0');

        if(value=='.' ){

            if(operaciones.includes(lastLetter))return null;
            

            //Ahora nos fijamos si en el numero hasta la anterior
            // operacion:
            let numero='';
            let rompe=0;

            for(let i=result.length-1;i>=0;i--){
                console.log(result[i])
                if(operaciones.includes(result[i]))break;
                if(rompe==1000) break;
                numero+=result[i];

                rompe++;
            }

            //El numero tiene un punto?:
            console.log('los numeros son: ',numero);
            console.log('indice encontrado: ', numero.indexOf('.'))
            if(numero.indexOf('.')==-1) return setResult(result+value);
            //Si ya hay un punto?:
            else return null;


        }
        if(lastLetter=='.' && operaciones.includes(value)){

            return setResult(result.slice(0,result.length - 1)+value);
        }
        

        if(value=='CE'){
            setResult(result.slice(0,result.length-1))
            console.log('longitud del resutl: ',result.length);
            if(result.length <= 1) return setResult('0')
            return null
        }

        if (operaciones.includes(lastLetter) && operaciones.includes(value)){
            console.log('ultima letra de result: ',lastLetter,'  value: ',value);
            if (lastLetter!==value){

                return setResult(result.slice(0,result.length-1)+value);
            } else{
                return null;
            }
        } 

        if(result.length >=17)return null;

        if(operaciones.includes(value) && result[0]=='0') return null;
        if (value !== '=' && value !== 'C') setResult(result + value);
        if(result[0]=='0') return setResult(value);

        if(value==='='){
            const resultado=calcResult(result);
            setResult(resultado.toString().slice(0,16));
        }

    }

    return(
        <Calc onClick={handleResult} id='calc'>
            <div className='' id='calc'>{result}</div>
            <span className='items'>C</span>
            <b className='items center'>CE</b>
            <b className='items center'>÷</b>
            <b className='items center'>7</b>
            <b className='items center'>8</b>
            <b className='items center'>9</b>
            <b className='items center'>*</b>
            <b className='items center'>4</b>
            <b className='items center'>5</b>
            <b className='items center'>6</b>
            <b className='items center'>-</b>
            <b className='items center'>1</b>
            <b className='items center'>2</b>
            <b className='items center'>3</b>
            <b className='items center'>+</b>
            <span className='items'>0</span>
            <b className='items center'>.</b>
            <b className='items center'>=</b>
        </Calc>
    )
}
export default Calculadora;