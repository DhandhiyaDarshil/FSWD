import React, { useState } from 'react';

function LoginPage() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loggedIn, setLoggedIn] = useState(false);
const [error, setError] = useState('');

const handleLogin = () => {
if (username === '' || password === '') {
setError('Both username and password are required.');
} else if (username === 'user' && password === 'password') {
setLoggedIn(true);
setError('');
} else {
setError('Invalid username or password.');
}
};

return (
<div>
<h1>Login Page</h1>
{loggedIn ? (
<p>Welcome, {username}!</p>
) : (
<div>
{error && <p style={{ color: 'red' }}>{error}</p>}
<input
type="text"
placeholder="Username"
value={username}
onChange={e => setUsername(e.target.value)}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={e => setPassword(e.target.value)}
/>
<button onClick={handleLogin}>Login</button>
</div>
)}
</div>
);
}

export default LoginPage;
