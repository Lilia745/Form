import { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
      label: "Username",
      pattern:"",
      recuired:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"It should be a vaild email addres!",
      label: "Email",
      recuired:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      recuired:true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      recuired:true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"Password don't match!",
      label: "Confirm Password",
      recuired:true
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div className="flex justify-center items-center h-[100vh] app">
      <form onSubmit={handleSubmit} className="bg-[white] px-[50px] py-[5px] rounded-[25px]">
        <h1 className="text-[25px] font-medium text-[#74e6be] text-center">Register</h1>
        {
          inputs.map((input) => (
            <FormInput key={input.id}
             {...input} 
             value={values[input.name]}
             onChange={onChange}
              />
          ))
        }
        <button className="border w-full p-[10px] mx-0 mt-[20px] bg-[#74e6be] rounded-[10px]">Submit</button>
      </form>
    </div>
  );
}

export default App;
