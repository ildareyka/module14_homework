const parser = new DOMParser();
const xmlString =`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector("list");
const students = listNode.querySelectorAll("student");

const data = [];
for (let i = 0; i < students.length; i++) {
  const studentNode = students[i];
  const nameNode = studentNode.querySelector("name");
  const firstNode = studentNode.querySelector("first");
  const secondNode = studentNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");

  const result = {
    name: [firstNode.textContent, secondNode.textContent].join(' '),
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr,
  };
  data.push(result);
}

console.log(data);