export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function login(){
    ev.preventDefault();
    await fetch('localhost:3000/login'), {
      method: POST,
    }
  }
  return (
    <form className="login" onSubmit>
        <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
}
