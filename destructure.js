const person = {name: 'Samrat Ahmed', age: 24, work: 'web development', id: 345, phone: 675678, address: 'Uttara'};

const { id, phone } = person;
// console.log(id, phone);


const friends = ['samrat', 'akash', 'arif', 'saif']; 
const[first, ...allfriends] = friends;
// console.log(allfriends);