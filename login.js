import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(AppContext);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role || !name) {
      alert("Enter name and select role");
      return;
    }
    
    setUser(name);
    
    if (role === "student") navigate("/student");
    else if (role === "employer") navigate("/employer");
    else if (role === "admin") navigate("/admin");
    else if (role === "officer") navigate("/officer");
    else navigate("/");
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <div>
        <label>
          Name: <br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div style={{ marginTop: 8 }}>
        <label>
          Role: <br />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select role</option>
            <option value="student">Student</option>
            <option value="employer">Employer</option>
            <option value="admin">Admin</option>
            <option value="officer">Placement Officer</option>
          </select>
        </label>
      </div>
      <div style={{ marginTop: 10 }}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
