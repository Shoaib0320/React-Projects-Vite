// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [password, setPassword] = useState('YourPassword');
//   const [length, setLength] = useState(18);
//   const [uppercase, setuppercase] = useState(true);
//   const [num, setNum] = useState(false);
//   const [sym, setSym] = useState(false);

//   // Function to generate password based on selected options
//   function generatePassword() {
//     let chars = 'abcdefghijklmnopqrstuvwxyz';
//     let generatedPassword = '';

//     if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (num) chars += '0123456789';
//     if (sym) chars += '~!@#$%^&*()_+';

//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * chars.length);
//       generatedPassword += chars.charAt(randomIndex);
//     }

//     setPassword(generatedPassword);
//   }

//   useEffect(() => {
//     generatePassword(); // Update password when settings change
//   }, [length, uppercase, sym, num]);

//   return (
//     <div className="container text-center">
//       <h2 className="mt-4">{password}</h2>
//       <div className="password-options mt-4">
//         <label htmlFor="length" className="form-label">Password Length: {length}</label>
//         <input 
//           min={6} 
//           max={40} 
//           value={length} 
//           onChange={(e) => setLength(e.target.value)} 
//           type="range" 
//           className="form-range" 
//           id="length" 
//         />
//         <div className="form-check">
//           <input 
//             className="form-check-input" 
//             type="checkbox" 
//             id="uppercase" 
//             checked={uppercase} 
//             onChange={(e) => setuppercase(e.target.checked)} 
//           />
//           <label className="form-check-label" htmlFor="uppercase">
//             Uppercase Letters
//           </label>
//         </div>
//         <div className="form-check">
//           <input 
//             className="form-check-input" 
//             type="checkbox" 
//             id="num" 
//             checked={num} 
//             onChange={(e) => setNum(e.target.checked)} 
//           />
//           <label className="form-check-label" htmlFor="num">
//             Include Numbers
//           </label>
//         </div>
//         <div className="form-check">
//           <input 
//             className="form-check-input" 
//             type="checkbox" 
//             id="sym" 
//             checked={sym} 
//             onChange={(e) => setSym(e.target.checked)} 
//           />
//           <label className="form-check-label" htmlFor="sym">
//             Include Symbols
//           </label>
//         </div>
//       </div>
//       <button className="btn btn-primary mt-4" onClick={generatePassword}>
//         Generate Password
//       </button>
//     </div>
//   );
// }

// export default App;










import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('YourPassword');
  const [length, setLength] = useState(18);
  const [uppercase, setuppercase] = useState(true);
  const [num, setNum] = useState(false);
  const [sym, setSym] = useState(false);
  const [copied, setCopied] = useState(false); // For showing copy status

  // Function to generate password based on selected options
  function generatePassword() {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let generatedPassword = '';

    if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (num) chars += '0123456789';
    if (sym) chars += '~!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars.charAt(randomIndex);
    }

    setPassword(generatedPassword);
    setCopied(false); // Reset copy status when new password is generated
  }

  // Function to copy the password to clipboard
  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    setCopied(true); // Show "copied" feedback
  }

  useEffect(() => {
    generatePassword(); // Update password when settings change
  }, [length, uppercase, sym, num]);

  return (
    <div className="container text-center">
      <div className="password-display mt-4 position-relative">
        <h2>{password}</h2>
        <i
          className={`fa fa-copy copy-icon ${copied ? 'text-success' : ''}`}
          onClick={copyToClipboard}
          title="Copy password"
          style={{ cursor: 'pointer', position: 'absolute', right: '40px', top: '20px' }}
        ></i>
         <i
          className={`fa-solid fa-arrows-rotate`}
          onClick={generatePassword}
          title="Copy password"
          style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '20px' }}
        ></i>
      </div>
      {copied && <small className="text-success">Copied to clipboard!</small>}
      
      <div className="password-options mt-4">
        <label htmlFor="length" className="form-label">Password Length: {length}</label>
        <input 
          min={6} 
          max={30} 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
          type="range" 
          className="form-range" 
          id="length" 
        />
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="uppercase" 
            checked={uppercase} 
            onChange={(e) => setuppercase(e.target.checked)} 
          />
          <label className="form-check-label" htmlFor="uppercase">
            Uppercase Letters
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="num" 
            checked={num} 
            onChange={(e) => setNum(e.target.checked)} 
          />
          <label className="form-check-label" htmlFor="num">
            Include Numbers
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="sym" 
            checked={sym} 
            onChange={(e) => setSym(e.target.checked)} 
          />
          <label className="form-check-label" htmlFor="sym">
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
