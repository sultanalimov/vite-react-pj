import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({
    name: 'Sultan',
    position: 'Junior',
    company: 'O!',
    age: 19,
    programmin_languages: 'Javascript',
    experience: '3 year'
  });

  const [message, setMessage] = useState('');

  const promotePerson = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      position: prevPerson.position === 'Junior' ? 'Middle' : 'Senior'
    }));
  };

  return (
    <div className="App">
      <h1>Информация о человеке</h1>
      <p><strong>Имя:</strong> {person.name}</p>
      <p><strong>Должность:</strong> {person.position}</p>
      <p><strong>Компания:</strong> {person.company}</p>
      <p><strong>Возраст:</strong> {person.age}</p>
      <p><strong>Языки программирования:</strong> {person.programmin_languages}</p>
      <p><strong>Опыт работы:</strong> {person.experience}</p>
      
      {message && <p>{message}</p>}
      
      <button onClick={promotePerson}>Повысить в должности</button>
    </div>
  );
}

export default App;
