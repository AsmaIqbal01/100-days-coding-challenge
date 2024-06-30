/*Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
 like coding languages, tools, and software frameworks.
Find a way to get three specific skills from this list and show them.*/
//defining list a developer knows
var skills = {
    languages: ['C++', 'JavaScript', 'TypeScript', 'Python'],
    tools: ['VSCode', 'Jupyter Notebook', 'Git', 'GitHub'],
    softwareFrameworks: ['Express', 'Angular', 'React']
};
//showing three specific skills lets say wanted to extract values Javascript, Git and REact
var specificSkills = [
    skills.languages.find(function (language) { return language === 'JavaScript'; }),
    skills.tools.find(function (tool) { return tool === 'Git'; }),
    skills.softwareFrameworks.find(function (framework) { return framework === 'React'; })
];
console.log(specificSkills);
