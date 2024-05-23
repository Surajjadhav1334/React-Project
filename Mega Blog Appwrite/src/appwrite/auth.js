import conf from '../config/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor () 
    {
        this.client
         .setEndpoint(conf.appwriteurl)
         .setProject(conf.appwriteprojectid);
         this.account = new Account(this.client)
    }

    async createAcoount({email, password, name})
    {
        try {
         const userAccount =  await this.account.create(ID.unique() ,email, password,
          name)
          if (userAccount) {
           return this.login({email, password});
          }
          else{
                return userAccount;
          }
        } catch (error) {
            throw error;
        }
    }
    async login ({email, password})
    {
        try {
        return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentuser(){
        try {
         return await this.account.get();
            
        } catch (error) {
          console.log("Appwrite service :: getCurrentuser :: error", error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwritr Service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;
