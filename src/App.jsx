import { useState } from 'react'
import './App.css'

function App() {

  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [contact , setContact] = useState("")
  const [gender , setGender] = useState("male")
  const [subjects , setSubjects] = useState({
    English: true,
    Hindi: false,
    Math: false
  })
  const [resume , setResume] = useState("")
  const [url , setUrl] = useState()
  const [selectedOption , setSelectedOption] = useState("")
  const [about , setAbout] = useState("")

  const handleSubmit = (e) =>{
   e.preventDefault()
   console.log(
    firstName ,
     lastName ,
      email ,
     contact , 
     gender ,
      subjects ,
      resume , 
      url , 
      selectedOption,
       about
   )
  }

  const handleSubjectChange = (sub) =>{
    setSubjects((prev) =>({
      ...prev,
      [sub] : !prev[sub]
    }))
  }
   
  const handleReset = () =>{
    setFirstName(""),
    setLastName(""),
    setEmail(""),
    setContact(""),
    setGender("male"),
    setSubjects({
      English: true,
      Maths: false,
      Hindi: false
    }),
    setResume(""),
    setUrl(""),
    setSelectedOption(""),
    setAbout("")
  }
  return (
    <div className='w-full h-full flex items-center flex-col bg-[#118ab2]'>
      <h1 className='text-4xl text-green-900 text-center m-5'>Form in React</h1>
      <form>
   <div className='w-auto h-auto bg-slate-400 mt-10 text-2xl px-2 rounded-xl'>
      <div>
      <label className='p-3' htmlFor="fname">First Name:</label><br/>
      <input className='border-2 px-4 py-2 rounded-2xl'
       type="text"
       value={firstName}
       onChange={(e)=> setFirstName(e.target.value)}
       id="fname" 
       placeholder='Enter first name'/>
       </div>

         <div>
       <label className='p-3' htmlFor="lname">Last Name:</label><br/>
       <input className='border-2 px-4 py-2 rounded-2xl' type='text'
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}
       id='lname' placeholder='Enter Last Name'/>
      </div>
      <div>
        <label className='p-3' htmlFor="email">Email:</label><br/>
        <input className='border-2 px-4 py-2 rounded-2xl'
         type='email' id='lname' 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder='Enter Email'/>
</div>
         <div>
        <label className='p-3' htmlFor="contact">Contact:</label><br/>
        <input className='border-2 px-4 py-2 rounded-2xl' type='tel'
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        id='lname' placeholder='Enter your contact info'/>
           </div>

           <div>
        <label className='p-3' htmlFor='gender'>Gender:</label> <br/>
        <div>
        <input className='mx-3' 
        type='radio'
        checked={gender === "male"}
        id='male' 
        onChange={(e) => setGender(e.target.value)}
        name='gender'/>
        Male
        <input className='mx-3'
         type='radio'
         checked={gender === 'female'}
          id='female'
          onChange={(e) => setGender(e.target.value)}
          name='gender'/>
        Female
        <input className='mx-3'
         type='radio'
         checked={gender === "others"}
         onChange={(e) => setGender(e.target.value)}
          id='others'
          name='gender'></input>
        Others
          </div>   
           </div>
           
           <div className='p-3'>
          <label htmlFor='subject'>Your best subject: </label>  <br></br>
          English
          <input 
          type='checkbox' 
          className='w-4 h-4'
          checked={subjects.English === true}
          onChange={(e) => handleSubjectChange("English")}
          name='subject'/>

          Hindi
          <input
           type='checkbox'
           className='w-4 h-4'
          checked={subjects.Hindi === true}
          onChange={(e) => handleSubjectChange("Hindi")}
           name='subject'/>

          Math
          <input type='checkbox'
          className='w-4 h-4'
          checked={subjects.Math === true}
          onChange={(e) => handleSubjectChange("Math")}
          name='subject'/>
          </div>

             <div>
        <label htmlFor='upload'>Upload Resume: </label>
        <input className='border-2'
         type='file'
         onChange={(e) => setResume(e.target.files)}
          id='upload'
          name='resume'/>
        </div>
        <div className='P-3'>
        <label htmlFor='url'>Type Url: </label><br/>
        <input className='border-2 px-4 py-2 rounded-2xl'
        onChange={(e) => setUrl(e.target.value)}
        type='url'
         id='url' name='url' required/>
         </div>
         
         <div className='P-3'>
        <label htmlFor='select'>Select Your Choice</label><br/>
        <select id='select' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
         <optgroup label='Beginners'>
         <option>Html</option>
         <option>css</option>
         </optgroup>
          <optgroup label='Intermediate'>
          <option>javascript</option>
          <option>tailwind css</option>
          </optgroup>
          <optgroup label='Advance'>
            <option>react</option>
            <option>next js</option>
          </optgroup>
        </select>
        </div>
        <div><br></br>
        <label htmlFor="about">About: </label>
        <textarea className='border-2 px-4 py-2 rounded-2xl'
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        rows='7' cols="30"></textarea>
    </div>
    <div>
    </div>
        <div>
        <button onClick={handleReset} className='px-5 py-2 bg-green-800 rounded-lg m-3 hover:bg-black text-white'>Reset</button>
        <button onClick={handleSubmit} className='px-5 py-2 bg-green-800 rounded-lg m-3 hover:bg-black text-white'>Submit</button>
        </div>
    
   </div>
   </form>
   </div>
  )
}

export default App
