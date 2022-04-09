import React, { useState, useContext, useEffect, createContext } from 'react';
import { db } from './firebase';
import {
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

const DatabaseContext = createContext();

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const [currentData, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getAllPosts = async () => {
    const collectionSnapShot = collection(db, 'Post');
    const snapShot = await getDocs(collectionSnapShot);
    return snapShot.docs;
  }

  const getAllMessages = async (session_id) => {
    const collectionSnapShot = collection(db, 'Messages',session_id, 'Messages');
    const q = query(collectionSnapShot, orderBy("createdAt", "asc"));
    const snapShot = await getDocs(q);
    return snapShot.docs;
  }

  const getPost = async (post_id) => {
    const post = await getDoc(doc(db, `Post/${post_id}`));
    return post;
  }

  const getUserData = async (user_id) => {
    const dataSnapShot = getDoc(doc(db, `User/${user_id}`));
    return dataSnapShot;
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Post'), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const UploadData = async (dataToUpload, collectionName) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), dataToUpload);
    }
    catch (e) {
      console.error("Error adding document to firestore: ", e);
    }
  }

  const value = {
    currentData,
    UploadData,
    getPost,
    getUserData,
    getAllPosts,
    getAllMessages
  };

  return (
    <DatabaseContext.Provider value={value}>
      {!loading && children}
    </DatabaseContext.Provider>
  );
}
