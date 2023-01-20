import {useState} from "react";

export function RegisterPage() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev){
    ev.preventDefault();
    const res = await fetch("http://localhost:3000/register", {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ userName, password, email })
    })
    const json = await res.json();
    if(json.status === 'ok'){
      alert('registration succesfull');
    } else {
      alert('registration failed');
    }
  }
  return (
    <form className="register" onSubmit={register}>
        <h1>Register</h1>
      <input type="text" 
        placeholder="username" 
        value={userName} 
        onChange={ev => setUsername(ev.target.value)}/>
      <input type="text" 
        placeholder="email" 
        value={email} 
        onChange={ev => setEmail(ev.target.value)}/>
      <input type="password" 
        placeholder="password" 
        value={password} 
        onChange={ev => setPassword(ev.target.value)}/>
      <button>Register</button>
    </form>

  );
}