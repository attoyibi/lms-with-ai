// hooks/useSignIn.js
import { useState } from 'react';
import supabase from '@/lib/supabase';

export default function useSignIn() {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);

 async function signIn(email, password) {
   const { data, error } = await supabase.auth.signInWithPassword({
     email,
     password,
   });

   if (error) {
     console.error(error);
     setError(error);
   } else {
     console.log(data);
    //  console.log(error);
     setData(data);
   }
 }

 return { data, error, signIn };
}
