import { useState } from 'react'
import matteoVistocco from './assets/matteo-vistocco.png'
import brooklyn from './assets/brooklyn.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div
        className="App"
        style={{
            minHeight: '100vh',
            backgroundImage: `url(${matteoVistocco}), url(${brooklyn})`,
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundSize: 'contain, cover',
            backgroundPositionX: '100px, center',
            backgroundColor: "rebeccapurple",
        }}
    >

    </div>
  )
}

export default App
