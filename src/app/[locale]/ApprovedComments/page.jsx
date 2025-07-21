"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ApprovedComments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const q = query(
        collection(db, "comments"),
        where("postId", "==", postId),
        where("status", "==", "approved")
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComments(data);
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment?.id}>
          <p>
            <strong>{comment?.name}</strong>
          </p>
          <p>{comment?.content}</p>
        </div>
      ))}
    </div>
  );
}
