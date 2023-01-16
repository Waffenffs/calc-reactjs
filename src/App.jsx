import React from "react"
import {useState} from "react"
import "./App.css"
import {BsFillBackspaceFill} from 'react-icons/bs'
import Button from './components/Button'

export default function App () {
  
  const [calcData, setCalcData] = useState("")

  function resultCalculation(){
    const resultsArray = calcData.match(/\d+|[^0-9]/g);
    let results = parseInt(resultsArray[0]);
    for(let i = 1; i < resultsArray.length; i++){
      if(!isNaN(resultsArray[i])){
        switch(resultsArray[i - 1]){
          case "-":
            results -= parseInt(resultsArray[i]);
            break;
          case "+":
            results += parseInt(resultsArray[i]);
            break;
          case "X":
            results *= parseInt(resultsArray[i]);
            break;
          case "/":
            results /= parseInt(resultsArray[i]);
            break;
        }
      }
    }
    return results;
  }

  function handleClick(event) {
    const value = event.target.value
    if(value === "="){
      setCalcData(resultCalculation())
    } else {
      setCalcData(prevData => prevData + value)
    }
  }

  function altHandleClick(event) {
    const value = event.target.value
    switch(value){
      case "clear":
        setCalcData("")
        break;
      case "backspace":
        setCalcData(prevData => prevData.slice(0, -1))
        break;
    }
  }

  return(
    <main>
      <div className="interface">{calcData}</div>
      <div className="content">
        <div className="row">
          <Button 
            special={true} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue="clear"
            text="AC"
            row="1"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue="/"
            text="/"
            row="1"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue="X"
            text="X"
            row="1"
            last={false}
          />
          <Button 
            special={true} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue="backspace"
            text={<BsFillBackspaceFill />}
            row="1"
            last={false}
          />
        </div>
        <div className="secondRow">
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={7}
            text="7"
            row="2"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={8}
            text="8"
            row="2"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={9}
            text="9"
            row="2"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue="-"
            text="-"
            row="2"
            last={true}
          />
        </div>
        <div className="thirdRow">
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={4}
            text="4"
            row="3"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={5}
            text="5"
            row="3"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={6}
            text="6"
            row="3"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue="+"
            text="+"
            row="3"
            last={true}
          />
        </div>
        <div className="fourthRow">
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={3}
            text="3"
            row="4"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={2}
            text="2"
            row="4"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue={1}
            text="1"
            row="4"
            last={false}
          />
          <Button 
            special={false} 
            altHandleClick={altHandleClick} 
            handleClick={handleClick} 
            specialValue="="
            text="="
            row="4"
            last={true}
          />
        </div>
      </div>
    </main>
  )
}

