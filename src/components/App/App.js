import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Display from '../Display/Display';


function App() {

const [ currentDisplay, setCurrentDisplay] = React.useState("0");// debe ser una constante
const [ formulaDisplay, setFormulaDisplay] = React.useState('');// debe ser una constante
const [isReady, setIsReady] = React.useState(true);
const [resultado, setResultado] = React.useState(false);

function handleNumber(number){
  
  //console.log(number);
  if(currentDisplay === "0"){ // si solo hay 0 en el current reemplazo el 0 por el numero recibido
    setCurrentDisplay( number);
  }else{ //sino concateno los numeros
    setCurrentDisplay(currentDisplay + number);
    //setCurrentDisplay((prev)=> prev +number); otra manera de hacer lo de arriba
  }
  setIsReady(true); // avisamos que estamos listos para operar
    
}// fin de handleNumber

function handleOperation(operation){
  if(isReady){ // solo si estamos listos para operar
    setFormulaDisplay(formulaDisplay + '' + currentDisplay + '' + operation); // concatenamos la operacion anterior con la siguiente
    
    if(resultado === false){
      setResultado(parseFloat(currentDisplay));
    } else{
        setResultado(operate(resultado, formulaDisplay.substr(-1), currentDisplay));
    }


    setCurrentDisplay ('0'); // devolvemos el valor del display a 0 
  }
  setIsReady(false);// avisamos que no estamos listos, no debemos poner otro operador
}


function handleEquals(){
  setResultado(operate (resultado, formulaDisplay.substr(-1), currentDisplay));
  setFormulaDisplay('');
  setCurrentDisplay(0);
  setIsReady(false);
}


  return (
    <div className="App">
    
    <Display 
      formula= {formulaDisplay}
      current={ isReady? currentDisplay : resultado}
    />

    <section className="Keyboard">

      <Button type="controller" value="CE"/>
      <Button type="controller" value="C"/>
      <Button type="controller" value="☒"/>
      <Button type="  onClick={handleOperation}" value="⁄" onClick={handleOperation}/>
      
      <Button type="number"  value='7'
      onClick={handleNumber}/>
      <Button type="number"  value='8' onClick={handleNumber}/>
      <Button type="number"  value='9' onClick={handleNumber}/>
      <Button type="operation" value="X"  onClick={handleOperation}/>
      <Button type="number"  value='4' onClick={handleNumber}/>
      <Button type="number"  value='5' onClick={handleNumber}/>
      <Button type="number"  value='6' onClick={handleNumber}/>
      <Button type="operation" value="-"  onClick={handleOperation}/>
      <Button type="number"  value='1' onClick={handleNumber}/>
      <Button type="number"  value='2' onClick={handleNumber}/>
      <Button type="number"  value='3' onClick={handleNumber}/>
      <Button type="operation" value="+"  onClick={handleOperation}/>
      <Button type="operation" value="±"  onClick={handleOperation}/>
      <Button type="number"  value='0' onClick={handleNumber}/>
      <Button type="controller" value=","/>

      
      <Button type="operation" value="="  onClick={handleEquals}/>
      
  

    </section>
      

    </div>
  );
  
}

function operate( a, operation, b){
b = parseFloat(b);

  switch(operation){
    case '+':
        return a + b;
        
    case 'X':
        return a * b;
        
    case '-':
        return a - b;
        
    case '⁄':
        return a / b;
    default:
      return b;
  }
}


export default App;
