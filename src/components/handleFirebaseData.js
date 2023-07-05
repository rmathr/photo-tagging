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

export { getData, addData };
