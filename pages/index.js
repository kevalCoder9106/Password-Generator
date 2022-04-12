import { useState } from 'react'

function Home(){
  const [pass,updatePass] = useState('Password')

  // array of pass values
  const alp_cap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const symbols = ['!','@','#','$','%','^','&','*','(',')']

  const generatePassword = () => {
    var password = ''
    const len = document.getElementById('length').value
  
    const alp_cap_el = document.getElementById('alp_cap')
    const alp_sm_el = document.getElementById('alp_sm')
    const numbers_el = document.getElementById('numbers')
    const symbols_el = document.getElementById('symbols')

    const checked = []

    if (alp_cap_el.checked) { checked.push(0) }
    if (alp_sm_el.checked) { checked.push(0) }
    if (numbers_el.checked) { checked.push(0) }
    if (symbols_el.checked) { checked.push(0) }

    for (let i = 0; i < len; i++){
      let base_sel = Math.floor(Math.random() * checked.length)

      if (base_sel === 0){
        // alp_cap
        var alp_cap_rand_sel = alp_cap[Math.floor(Math.random(0) * alp_cap.length)]
        password += alp_cap_rand_sel
      }
      else if(base_sel === 1){
        // alp_sm
        var alp_sm_rand_sel = alp_cap[Math.floor(Math.random(0) * alp_cap.length)]
        password += String(alp_sm_rand_sel).toLowerCase()
      }
      else if(base_sel === 2){
        // num
        var num_rand_sel = Math.floor((Math.random(0) * 10)).toString()
        password += num_rand_sel
      }
      else if(base_sel === 3){
        // symbols
        var symbol_rand_sel = symbols[Math.floor(Math.random(0) * symbols.length)]
        password += symbol_rand_sel
      }
    }

    updatePass(password)
  }

  const copyText = () => {
    navigator.clipboard.writeText(pass)
  }

  return(
    <div className="w-screen h-screen flex flex-col 2xl:flex-row text-white font-mono">
      <div className="2xl:w-1/2 2xl:h-full w-full h-1/4 bg-slate-800 flex flex-row items-center justify-center">
        <div className="w-1/2 p-2 h-10 flex flex-row items-center bg-gray-600 rounded-sm">{pass}</div>
        <button onClick={copyText} className="mx-5 p-2 rounded text-sm bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-700">Copy</button>
      </div>
      <div className="2xl:w-1/2 2xl:h-full w-full h-3/4 bg-slate-700 flex flex-col items-center justify-center">
        <div className="flex flex-row w-72 justify-between">
          <h1 className="lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5">A to Z</h1>
          <input id='alp_cap' type='checkbox'></input>
        </div>
        <div className="flex flex-row w-72 justify-between">
          <h1 className="lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5">a to z</h1>
          <input id='alp_sm' type='checkbox'></input>
        </div>
        <div className="flex flex-row w-72 justify-between">
          <h1 className="lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5">0 to 9</h1>
          <input id='numbers' type='checkbox'></input>
        </div>
        <div className="flex flex-row w-72 justify-between">
          <h1 className="lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5">Symbols</h1>
          <input id='symbols' type='checkbox'></input>
        </div>
        <div className='flex flex-row w-72 justify-between'>
          <h1 className="lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5">Length</h1>
          <input id='length' type='range' min='1' max='20' defaultValue='10' onChange={generatePassword} className='w-32'></input>
        </div>
        <button onClick={generatePassword} className="my-6 p-2 rounded text-sm bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-700">Generate</button>
      </div>
    </div>
  )
}

export default Home