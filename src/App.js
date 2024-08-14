
import './App.css';
function Header () {
  return (
    <>
      <h2>Header</h2>
      <Title/>
    </>
    
  )
}
function Footer () {
  return (
    <>
      <h2>Footer</h2>
      <Title/>
    </>
    
  )
}
function Content () {
  return (
    <>
      <h2>Content</h2>
      <Title/>
    </>
    
  )
}
function Title () {
  return (
    <p>Title</p>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
