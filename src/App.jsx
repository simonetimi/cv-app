import './App.css';
import { useState } from 'react';

import Editor from './components/Editor';

function Bridge() {
  const [formData, setFormData] = useState({
    header: { name: '', email: '', address: '', phone: '' },
    education: ['school', 'city'],
    experience: ['hi'],
  });
  return <Editor />;
}

function App() {
  return <Bridge />;
}

export default App;
