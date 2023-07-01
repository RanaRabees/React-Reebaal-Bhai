import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Four from './components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Nine from './components/Nine'
import Ten from './components/Ten'
import Eleven from './components/Eleven'
import Twelve from './components/Twelve'
import Thirteen from './components/Thirteen'
// import Fourteen from './components/Fourteen'

export default function Home() {
  return (
    <>
      <section>
        <h1 className='text-6xl text-center text-lime-500'>First Component</h1>
        <br />
        <First />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Second Component</h1>
        <br />
        <div className='flex justify-center'>
          <Second />
          <Second />
          <Second />
        </div>
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Third Component</h1>
        <br />
        <Third />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Four Component</h1>
        <br />
        <Four />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Five Component</h1>
        <br />
        <div className='flex justify-center'>
          <Five />
        </div>
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Six Component</h1>
        <br />
        <Six />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Seven Component</h1>
        <br />
        <Seven />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Eight Component</h1>
        <br />
        <Eight />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Nine Component</h1>
        <br />
        <Nine />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Ten Component</h1>
        <br />
        <Ten />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Eleven Component</h1>
        <br />
        <Eleven />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Twelve Component</h1>
        <br />
        <Twelve />
        <br />
        <h1 className='text-6xl text-center text-lime-500'>Thirteen Component</h1>
        <br />
        <Thirteen />
        <br />
        {/* <h1 className='text-6xl text-center text-lime-500'>Fourteen Component</h1>
        <br />
        <Fourteen />
        <br /> */}
        {/* <h1 className='text-6xl text-center text-lime-500'> Component</h1>
      <br />
      <br /> */}
      </section>
    </>
  )
}


