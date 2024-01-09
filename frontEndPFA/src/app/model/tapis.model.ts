import { FileHandle } from "./file-handle.model";

export interface Tapis{
    
     type:string,
     description:string;
     price:number;
     imageModels:FileHandle[]
}