"use server";

import NextAuth, { AuthError, User } from 'next-auth';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { Md5 } from 'ts-md5';
import { NiuResponse, UserObj } from './app/lib/definitions';
import Credentials from 'next-auth/providers/credentials';

async function login_user(email: string, password: string): Promise<User | null> {
	const passwordHash = Md5.hashStr(password);

	const body = new FormData();
	body.set("account", email);
	body.set("app_id", "niu_8xt1afu6");
	body.set("scope", "base");
	body.set("password", passwordHash);
	body.set("grant_type", "password");

	const response = await fetch("https://account-fk.niu.com/v3/api/oauth2/token", {
		method: "POST",
		body
	});
	const data = await response.json();
	if (data.status == 0) {
		const userObj = data as NiuResponse<UserObj>;
		const user: User = {
			id: userObj.data.user.user_id,
			name: userObj.data.token.access_token,
			email: userObj.data.user.email,
			image: userObj.data.user.avatar
		};
		return user;
	}
	return null;
}

async function get_user(email: string, password: string): Promise<User> {
	const user = await login_user(email, password);
	if(user == null){
		const err = new AuthError();
		err.type = 'CredentialsSignin';
		throw err;
	}
	return user;
}

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);
				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await get_user(email, password);
					if (!user) return null;
					return user;
				}
				return null;
			},
		}),
	],
});