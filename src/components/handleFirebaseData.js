import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAYaXPXeZciV1L1_tWaPbvxFhgDc0S7-pk',
  authDomain: 'phototagging-a690c.firebaseapp.com',
  projectId: 'phototagging-a690c',
  storageBucket: 'phototagging-a690c.appspot.com',
  messagingSenderId: '361105991825',
  appId: '1:361105991825:web:9a74eef4e9fbdc16c23730',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createDocument = (collectionName, document) => {
  const colRef = collection(db, collectionName);
  return addDoc(colRef, document);
};

const characters = [
  {
    name: 'Edward Elric',
    id: 0,
    img: 'https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/edward.png?alt=media&token=eceb8376-b2ad-4dd6-8760-7f073dabb68d',
    xCoord: 1144,
    yCoord: 7380,
  },
  {
    name: 'Brian',
    id: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/brian.png?alt=media&token=6da00d03-876d-445a-8dc8-8ef0627c156d',
    xCoord: 275,
    yCoord: 5800,
  },
  {
    name: 'Ash',
    id: 2,
    img: 'https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/ash.png?alt=media&token=97cd221b-73f2-407b-ae2e-d2e09bfbaeee',
    xCoord: 54,
    yCoord: 7060,
  },
  {
    name: 'Link',
    id: 3,
    img: 'https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/link.png?alt=media&token=a091c5cf-463b-48b8-8b8f-9d6b65107d16',
    xCoord: 450,
    yCoord: 7734,
  },
  {
    name: 'Wilson',
    id: 4,
    img: 'https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/wilson.png?alt=media&token=9edd84bb-f650-4f17-81fa-35ab196a775b',
    xCoord: 1610,
    yCoord: 8007,
  },
];

function createDb() {
  //   return characters.map((item) => createDocument('characters', item));
}

// characters.map((item) => createDocument('characters', item));

// characters.map(async (item) => {
//   await setDoc(doc(db, 'characters', item.name), {
//     name: item.name,
//     id: item.id,
//     xCoord: item.xCoord,
//     yCoord: item.yCoord,
//   });
// });

// db.setDoc(characters);

async function getData(colName) {
  const col = collection(db, colName);
  const colSnapshot = await getDocs(col);
  const colList = colSnapshot.docs.map((doc) => doc.data());
  return colList;
}

const teste = await getData('characters');

// console.log('??');

// console.log(teste);

export { getData };
