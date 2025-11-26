import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name='Sponge Bob' age={30} isStudent={true} />
      <Student name='Patrick' age={5} isStudent={true} />
      <Student name='Sandy' age={72} isStudent={false} />
      <Student name='Squidward' age={27} isStudent={false} />
      <Student />
    </>
  )
}

export default App
