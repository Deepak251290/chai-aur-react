import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {             //object
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(     //automatically injected by bable(transpiler)
      'a',                                   // HTML tag
      {href: 'https://google.com', target: '_blank' }, //attribute set if have any
      'click me to visit google',            // chaildren (text inject) a tag or paragraph tag
      anotherUser                      // evaluated expression (to inject variables)
)

createRoot(document.getElementById('root')).render(
  // <App />  
  // <MyApp />
    // MyApp()    //can be done like this also but not preferred

    // ReactElement
    // anotherElement
    reactElement
)
