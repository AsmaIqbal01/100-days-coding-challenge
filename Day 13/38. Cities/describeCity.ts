/*Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
Call your function for three different cities, at least one of which is not in the default country.*/
function describe_city(name: string, country:string="UK")
{
      console.log(` ${name} is in ${country}`);
}
describe_city("Karachi","Pakistan");
describe_city("Manchester","Uk");
describe_city("Londonheh");
describe_city("Lisbon",`Portugal`);

