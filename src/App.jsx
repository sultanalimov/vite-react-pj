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

  

  return (
    <div className="App">
      <h1>Информация о человеке</h1>
      <p><strong>Имя:</strong> {person.name}</p>
      <p><strong>Должность:</strong> {person.position}</p>
      <p><strong>Компания:</strong> {person.company}</p>
      <p><strong>Возраст:</strong> {person.age}</p>
      <p><strong>Город:</strong> {person.city}</p>
      <p><strong>Опыт работы:</strong> {person.experience}</p>
      
      
    </div>
  );
}

export default App;
