import React, { useState, useContext, useEffect, createContext } from 'react';
import { db } from './firebase';
import { doc, collection, addDoc, getDocs, getDoc, setDoc, onSnapshot, query, where, orderBy, } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const DatabaseContext = createContext();

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const { currentUser } = useAuth();
  const [currentData, setData] = useState();

  const getAllPosts = async () => {
    const collectionSnapShot = collection(db, 'Post');
    const snapShot = await getDocs(collectionSnapShot);
    return snapShot.docs;
  }

  const getAllMessages = async (session_id) => {
    const collectionSnapShot = collection(db, 'Messages', session_id, 'Messages');
    const q = query(collectionSnapShot, orderBy("createdAt", "asc"));
    const snapShot = await getDocs(q);
    return snapShot.docs;
  }

  const getPost = async (post_id) => {
    const post = await getDoc(doc(db, `Post/${post_id}`));
    return post;
  }

  const getUserData = async (uid) => {
    const dataSnapShot = getDoc(doc(db, `User/${uid}`));
    return dataSnapShot;
  };

  const getAllComments = async (post_id) => {
    const comments = [];
    const collectionSnapShot = collection(db, `Post/${post_id}/Comments`);
    const q = query(collectionSnapShot, orderBy("time", "desc"));
    const commentSnapShot = await getDocs(q);
    await Promise.all(
      commentSnapShot.docs.map(async comment => {
        const replies = await getAllReplies(post_id, comment.id);
        console.log(replies);
        comments.push({ ...comment.data(), id: comment.id, replies });
      })
    )
    return comments;
  }

  const getAllReplies = async (post_id, comment_id) => {
    const replies = [];
    const collectionSnapShot = collection(db, `Post/${post_id}/Comments/${comment_id}/Replies`);
    const q = query(collectionSnapShot, orderBy("time", "asc"));
    const snapShot = await getDocs(q);
    snapShot.docs.map(reply => {
      replies.push(reply.data());
    })
    return replies;
  }

  const UploadData = async (dataToUpload, collectionName) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), dataToUpload);
      return docRef;
    }
    catch (e) {
      console.error("Error adding document to firestore: ", e);
    }
  }

  async function addPlan(dataToUpload) {
    try {
      const docRef = await addDoc(
        collection(db, `User/${currentUser.uid}/Planning`),
        dataToUpload
      );
    } catch (e) {
      console.error('Error posting Visiting Plan to firestore: ', e);
    }
  }
  const getAllPlannedPosts = async () => {
    const collectionSnapShot = collection(db, `User`);
    const snapShot = await getDocs(collectionSnapShot);
    const plans = [];

    await Promise.all(
      snapShot.docs.map(async (doc) => {
        const collectionSnapShot2 = collection(db, `User/${doc.id}/Planning`);
        const snapShot2 = await getDocs(collectionSnapShot2);
        snapShot2.docs.map(async (plan) => {
          plans.push({
            ...plan.data(),
            name: doc.data().name,
            photoURL: doc.data().photoURL,
            uid: doc.id,
          });
        });
      })
    );
    return plans;
  };

  function GenerateHash(s1, s2) {
    let i, char1, char2, hash = 0;
    if (s1.length === 0) return hash;
    for (i = 0; i < s1.length; i++) {
      char1 = s1.charCodeAt(i);
      char2 = s2.charCodeAt(i);
      hash = ((hash << 5) - hash) + char1 + char2;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);

  }

  const value = {
    currentData,
    UploadData,
    getPost,
    getUserData,
    getAllPosts,
    getAllMessages,
    addPlan,
    getAllPlannedPosts,
    getAllComments,
    GenerateHash
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
