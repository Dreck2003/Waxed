const signos = [ "÷","*", "-", "+"];

let rompeTodo=0;

export const calcResult = (operation:string) => {

    const [numeros, operations] = stringsToArrays(operation);

    // console.log('numeros: ',numeros);
    // console.log("signos: ", operations);
    const resultadoTotal=operar(numeros,operations);
    return resultadoTotal;

};


const operar=(numeros:string[],ops:string[],i:number=0,acc=0):any=>{

    //FUNCION RECURSIVA WAJWAJWAJWAJ    

//    console.log("index ", i);
   if(rompeTodo>1000) return 0;
   rompeTodo++;
   if(i>=signos.length)return acc;


    const foundIndex=ops.indexOf(signos[i]);
    console.log('el signo es: ',signos[i]);

    if(foundIndex !== -1){
        //Si se encontro el indice!, etonces: 
        const resultado = result(numeros[foundIndex], numeros[foundIndex+1],signos[i]);
        // console.log("valores: ", numeros[foundIndex],' ',signos[i] ,' ',numeros[foundIndex+1]);
        // console.log('resultado es: ',resultado);
        numeros.splice(foundIndex, 2, resultado.toString());
        ops.splice(foundIndex,1);
        // console.log("Los numeros quedaron: ", numeros);
        // console.log("las operaciones: ", ops);
        return operar(numeros,ops,i,resultado);
    }else{
        //Si no se encontro el signo importante:
        // console.log('El signo no fue  encontrado: ',signos[i])
        return operar(numeros,ops,++i,acc);

    }

    


}


const result=(numero1:string,numero2:string,signo:string) => {


    switch (signo) {
      case "÷":
        return Number(numero1) / Number(numero2);
      case "*":
        return Number(numero1) * Number(numero2);
      case "-":
        return Number(numero1) - Number(numero2);
      case "+":
        return Number(numero1) + Number(numero2);
      default:
          console.log('no se encontro el signo');
          return 0;
    }


}




const stringsToArrays = (operacion: string) => {
  //parametro: '128+23*10/45*89'
  const numeros: string[] = [];
  const op: string[] = [];
  let numero = "";

  for (let i = 0; i < operacion.length; i++) {
    if (signos.includes(operacion[i])) {
      op.push(operacion[i]);
      numeros.push(numero);
      numero = "";
    } else {
      numero += operacion[i];
    }

    if (i == operacion.length - 1) {
      numeros.push(numero);
    }
  }

  //   console.log('numeros: ',numeros);
  //   console.log('signos: ',op);
  return [numeros, op];
};
