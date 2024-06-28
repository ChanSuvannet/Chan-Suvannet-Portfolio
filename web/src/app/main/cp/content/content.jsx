import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EducationComponent from './education/education.component';
import HomeComponent from './home/home.component';
import SkillComponent from './skill/skill.component';

const ContentComponent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
  }, [location]);

  return (
    <div className='overflow-hidden scroll-smooth'>
      <div id="home">
        <HomeComponent />
      </div>
      <div id="education">
        <EducationComponent />
      </div>
      <div id="skill">
        <SkillComponent /> 
      </div>
    </div>
  );
};

export default ContentComponent;
