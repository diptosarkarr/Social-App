import {Client, Databases, Storage, Avatars, Account } from 'appwrite'

export const appwriteConfig={
    projectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL
}

export const client = new Client();
client.setProject(appwriteConfig.projectID)
client.setEndpoint(appwriteConfig.url)

export const databases = new Databases(client);
export const storage = new Storage(client)
export const avatars = new Avatars(client)
export const account = new Account(client)