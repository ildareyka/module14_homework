
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

   const data = JSON.parse(jsonString);

   const persons = data.list;
    const results = [];
   for (let i = 0; i < persons.length; i++) {
    
    const result = {
        name: persons[i].name,
        age: Number(persons[i].age),
        prof: persons[i].prof
     }
     results.push(result);
   }
 
   console.log(results);
