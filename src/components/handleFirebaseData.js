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

const leaderboard = [
  {
    username: 'rmath',
    time: 10,
    date: '07/03/2023',
  },
  {
    username: 'craque susu',
    time: 2,
    date: '03/07/2023',
  },
  {
    username: 'galo cego',
    time: 153,
    date: '08/01/2023',
  },
];

// leaderboard.map((item) => createDocument('leaderboard', item));

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

function addData(document, collectionName) {
  const colRef = collection(db, collectionName);
  return addDoc(colRef, document);
}

const teste = await getData('characters');

// console.log('??');

// console.log(teste);

export { getData, addData };
