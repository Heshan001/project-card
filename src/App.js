import './App.css'
import Title from './components/common/titleCom/title'
import Card from './components/cardCom/card'
import Navbar from './components/navbarCom/navbar'
import Content from './components/contentCom/content'
import Project from './components/projectCom/project'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Content />
      <Project />
      <Title />
      <Card
        title='rgrgrbrb'
        imageUrl='https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg'
        description='uruviurhivuhiu b jberwbikwv uiwkubgfv bbuwiuvuhburieu uruviruviuv'
        order='true'
      />
    </div>
  )
}

export default App
