import React, { useState } from 'react'
import './index.css'

function Calculator() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const reset = () => {
    setExpression('');
  };

  const handleEvaluate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gray-900">
      <div className="w-full max-w-xs bg-purple-700 p-5 rounded-lg shadow-lg border-2">
        <div className="flex justify-end items-center text-right text-3xl font-light h-12 bg-white rounded-lg py-2 px-5 text-purple-700">{expression}</div>
        <div className="my-5 flex justify-center">
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick('+')}
          >+</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick('-')}
          >-</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick('*')}
          >*</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick('/')}
          >/</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick('.')}
          >.</button>
        </div>
        <div className="my-5 flex justify-center">
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(1)}
          >1</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(2)}
          >2</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(3)}
            >3</button>
        </div>
        <div className="my-5 flex justify-center">
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(4)}
          >4</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(5)}
          >5</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(6)}
          >6</button>
        </div>
         <div className="my-5 flex justify-center">
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(7)}
          >7</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(8)}
          >8</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(9)}
          >9</button>
        </div>
        <div className="my-5 flex justify-center">
          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={handleEvaluate}
          >=</button>
          <button 
            className="bg-white hover:bg-gray-100 text-purple-700 font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={() => handleClick(0)}
          >0</button>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white font-medium mx-1 py-2 px-5 rounded-lg transition-colors" 
            onClick={reset}
          >R</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;