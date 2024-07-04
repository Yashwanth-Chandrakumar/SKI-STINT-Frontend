import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../assets/img/logo.png";
function Login1() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
const navigate = useNavigate()

const handleSubmit = (event) => {
  event.preventDefault();
  if (username === '' || password === '') {
    alert('Please fill out both fields.');
  } else {
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("userRole", username);
    alert(`Logging in as ${username}`);
    if (username === 'principal') {
      navigate("/principal");
    } 
    else if(username === 'tutor'){
      navigate("/tutor");

    }
    else if(username === 'hod'){
      navigate("/hod");

    }
    else {
      navigate("/");
    }
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={img}
          alt="College Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Ski-stint</h1>
        <h2 style={styles.subtitle}>Admin</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div style={styles.showPassword}>
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={handleShowPassword}
              />
              <label htmlFor="show-password" style={styles.checkboxLabel}>
                {showPassword ? 'Hide Password' : 'Show Password'}
              </label>
            </div>
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0e0e53', // Changed background color to royal blue
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    background: '#fff',
    padding: '30px', // Increased padding for slightly larger card
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '450px',
    width: '100%',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    marginBottom: '20px',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold', // Made login title bold
    color: '#333',
  },
  subtitle: {
    margin: '10px 0 20px',
    fontSize: '20px',
    color: '#666',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  showPassword: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    fontSize: '14px',
    color: '#555',
  },
  checkboxLabel: {
    marginLeft: '5px',
    cursor: 'pointer',
  },
  button: {
    padding: '14px 30px', // Adjusted padding for a slightly larger button
    border: '1px solid #FFFF99', // Light yellow border color
    borderRadius: '400px', // Adjusted border radius for button
    backgroundColor: '#F9E79F', // Light yellow background color
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%', // Set button width to 100% of parent
    maxWidth: '400px', // Added max width for larger screens
    height: '40px', // Set fixed height for the button
    boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)', // Added box shadow
  },
  buttonHover: {
    backgroundColor: '#FFFFCC', // Light yellow background color on hover
    padding: '12px 28px',
  },
  '@media (max-width: 480px)': {
    card: {
      padding: '20px', // Adjusted padding for smaller screens
    },
    title: {
      fontSize: '20px',
    },
    subtitle: {
      fontSize: '16px',
    },
  },
};

export default Login1;
