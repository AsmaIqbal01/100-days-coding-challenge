/*Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
 like coding languages, tools, and software frameworks. 
Find a way to get three specific skills from this list and show them.*/
//defining list a developer knows
const skills={                          //skills an obj that hold three properties i.e languages,tools and s/w framework
    languages : ['C++','JavaScript','TypeScript','Python'],
    tools : ['VSCode','Jupyter Notebook','Git','GitHub'],
    softwareFrameworks:['Express','Angular','React']
};
//showing three specific skills lets say wanted to extract values Javascript, Git and REact
const specificSkills = [
    skills.languages.find(language => language === 'JavaScript'),
    skills.tools.find(tool => tool === 'Git'),
    skills.softwareFrameworks.find(framework => framework === 'React')
  ];
  
  console.log(specificSkills);
