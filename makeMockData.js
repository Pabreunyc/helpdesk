const users = [
  {id:100, name: 'Sue Storm', title: 'Invisible Womam', phone:'212-444-4442', email:'ss@ff4.org' },
  {id:200, name: 'Reed Richards', title:'Mr. Fantasic', phone:'222-444-4441', email:'rr@ff4.org' },
  {id:300, name: 'Johhny Storm', title:'The Torch', phone:'212-444-4443', email:'js@ff3.org' },
  {id:400, name:'Ben Grimm', title:'The Thinf', phone:'212-444-4444', email:'bg@ff4.org'}];

const products = ['AutoCAD','General PC','Parking Permit','Printing'];
const category = ["General Help","Software Issue","File Issue","Print Book","Other","Bucket List"];
const priority = ["Critical","High","Standard","Low","Request"];

const subjects = [
  'Having a display problem', "Computer won't boot", "Printing comes out in bloack & white",
  "Waterheater is overheating", "Print this book", "Can't access network drive", "It's Not Working!!",
  "help me", "need help with problem"];
const description = [
  "Cras quis quam pellentesque, pharetra elit pulvinar, elementum dolor.",
  "Nullam suscipit urna in velit facilisis bibendum.",
  "In malesuada lectus tempor est molestie, a tempus nisl suscipit.",
  "Proin pulvinar magna sed risus feugiat, quis pretium risus semper.",
  "Pellentesque eu ante imperdiet, varius quam at, lobortis sapien.",
  "Suspendisse sed justo ac lectus elementum fringilla.",
  "Aenean dapibus nisl sollicitudin, rhoncus nisl eu, blandit quam.",
  "Fusce ultricies purus fringilla tempus lacinia.",
  "Integer ultrices lectus sit amet nulla luctus, ac tristique nisl venenatis.",
  "Etiam sed erat a nunc vulputate sagittis nec eget nibh.",
  "Curabitur egestas ipsum quis dictum aliquet."];

let len = {
  u: users.length,
  x: products.length,
  c: category.length,
  p: priority.length,
  s: subjects.length,
  d: description.length
};

/*
interface TableFooItem {
  id: number;
  from: string,
  title: string,
  subject: string;
  description: string,
  category: string;
  priority: string,
  date:string
}
*/

let json = [];
let r = getRandomIntInc;
for(let i=0,ru; i<100; i++) {
  ru = users[r(0,len.u)];

  json.push({
    id: i+1,
    from: ru.name,
    title: ru.title,
    subject: subjects[r(0,len.s)],
    description: description[r(0,len.d)],
    product: products[r(0, len.x)],
    category: category[r(0, len.c)],
    priority: priority[r(0,len.p)],
    date: getRandomDate(),
    status: getRandomIntInc(0,2),
  });
}

console.log(JSON.stringify(json));

function getRandomDate() {
  let d = [getRandomIntInc(1,12), getRandomIntInc(1,28), getRandomIntInc(2017,2019)].join('-');
  return d;
}

function getRandomIntInc(min, max) {
  //The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min )) + min;
}
