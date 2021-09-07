const locations = ['Glasgow', 'Edinburgh', 'New York', 'Paris', 'London','Munich', 'Cape Cod'];
const subjects = ['a Seascape', 'the Milk Way', 'a bride', 'a street scene', 'a building', 'a landscpe', 'a pet animal', 'a wild animal', 'a person at work', 'a sports person'];
const cameraGears = ['pin-hole camera', 'DSLR + 50mm lens', 'DSLR + 14mm lens', 'FF Mirrorless + 70-200mm lens', 'camera phone'];

let randomLocation = Math.floor(Math.random() * (locations.length -1));
let randomSubject = Math.floor(Math.random() * (subjects.length -1));
let randomGear = Math.floor(Math.random() * (cameraGears.length -1));

let location = locations[randomLocation];
let subject = subjects[randomSubject];
let cameraGear = cameraGears[randomGear];

console.log (`Your next assignement is to go to ${location}, take a photograph of ${subject} using only a ${cameraGear}`)
