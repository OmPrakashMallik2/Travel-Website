import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API request to the back-end
    axios.post('/api/register', { name, email, password })
      .then((response) => {
        // Handle successful registration
        console.log(response.data);
      })
      .catch((error) => {
        // Handle registration error
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <button type="submit">Register</button>
        {/* <br/> */}
      </form>
    </div>
  );
}

export default RegistrationForm;









// import React from 'react';
// import axios from 'axios';

// class RegistrationForm extends React.Component {
//   state = {
//     name: '',
//     email: '',
//     password: ''
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     // Make API request to the back-end
//     axios.post('/api/register', this.state)
//       .then((response) => {
//         // Handle successful registration
//         console.log(response.data);
//       })
//       .catch((error) => {
//         // Handle registration error
//         console.error(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Registration Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
//           <br/>
//           <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
//           <br/>
//           <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
//           <br/>
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RegistrationForm;
