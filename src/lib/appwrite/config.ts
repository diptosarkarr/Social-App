import {Client, Databases, Storage, Avatars, Account } from 'appwrite'

export const appwriteConfig={
    projectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    usersCollectionId:import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    postsCollectionId:import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
    savesCollectionId:import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
}

export const client = new Client();
client.setProject(appwriteConfig.projectID)
client.setEndpoint(appwriteConfig.url)

export const databases = new Databases(client);
export const storage = new Storage(client)
export const avatars = new Avatars(client)
export const account = new Account(client)