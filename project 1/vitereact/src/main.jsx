import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { jsx } from 'react/jsx-runtime'

function Myapp() {
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props : {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     childern: 'click to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

const anotheruser = "chai aur react"

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'click to visit google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <Myapp />
   ReactElement
  
)
