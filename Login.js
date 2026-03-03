import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
    setEmail("");
    setPassword("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signed up with Email: ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="card p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Login / Signup</h3>
        <form>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <button className="btn btn-success" onClick={handleSignup}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;