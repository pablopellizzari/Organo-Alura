import Banner from './components/Banner/Banner.js';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team/index.js';
import Footer from './components/Footer/index.js';

function App() {

  const teams = [
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }




  ]

  const [collaborators, setCollaborators] = useState([]);

  const handleCollaboratorRegistered = (collaborator) => {
    console.log('Collaborator registered:', collaborator);
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)}onCollaboratorRegistered={collaborator => handleCollaboratorRegistered(collaborator)} />
      {teams.map(team => <Team key={team.name}
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}/>)
      }
      <Footer />
    </div>
  );
}

export default App;
