// hooks/useSignIn.js
import { useState } from 'react';
import supabase from '@/lib/supabase';
import { AuthError } from '@supabase/supabase-js'; // Assuming AuthError is imported from Supabase

interface Credentials {
	email: string;
	password: string;
}
export default function useSignIn() {
	const [ data, setData ] = useState<any>(null); // Use 'any' if data type is not clear
	const [ error, setError ] = useState<AuthError | null>(null); // Specify type as AuthError | null

	async function signIn({ email, password }: Credentials) {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
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
