import { AppDataSource } from "./data-source";
import 'reflect-metadata';

export const initDatabase = async () =>{
    try {
        await AppDataSource.initialize();
        console.log("Database initialized successfully");
        return AppDataSource;
    } catch (ex) {
        console.error("error initializing database:", ex);
        throw ex; 
    }
}