import './App.css'
//import StatefulForm from './componets/SimpleForm/StatefulForm/StatefulForm'
//import SimpleForm from './componets/SimpleForm/SimpleForm'
//import RefForm from './RefForm/RefForm'
// import HookForm from './componets/HollkForm/HookForm'
import RuseableForm from './componets/RuseableForm/RuseableForm'
function App() {

  const handleSinghUpSubmit = data =>{
    console.log('sign up data',data);
  }
  const handleUpdateProfile = data =>{
    console.log('update Profile',data)

    
  }
  return (
    <>
      
      <h3>Tern with VITE and REACT</h3>
      {/* <h1>SING UP</h1> */}
     {/* <StatefulForm></StatefulForm> */}

     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <RuseableForm fromTitle={"SIGN UP"}
     handleSubmit={handleSinghUpSubmit}>
      <div>
        <h2>SIGN UP </h2>
        <p>Now Sign Up</p>
      </div>
     </RuseableForm>
     <RuseableForm fromTitle={"UPDATE PROFILE"} handleSubmit={handleUpdateProfile }submitBtnText='Update Profile'>
      <div>
       <h2>Update Profile</h2>
       <p>Alwyass Update P</p>
      </div>
     </RuseableForm>
      
    </>
  )
}

export default App
