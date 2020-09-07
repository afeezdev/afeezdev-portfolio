import React from 'react';

import Projects from '../../components/projects/projects.component';

import { projects } from '../../assets/projectsList';



class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects : []
    }
  }

  componentDidMount() {
    this.setState({ projects : projects})
  }

  render() {
    return (
      <div>
        {
          projects.map( projects =>{
            return (
              <Projects 
                key={projects.id}
                projects={projects}
              />
            )
          } )
        }
      </div>
    );
  }
}

export default ProjectsPage;