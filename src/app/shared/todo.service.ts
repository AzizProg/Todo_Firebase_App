import { Injectable } from '@angular/core';
import {Firestore,addDoc,collection, collectionData,deleteDoc} from '@angular/fire/firestore';
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
   db =collection(this.firestore,'todos');
  
  constructor(private firestore:Firestore) {}

  // addTodo(title:string){
  // const db: any=collection(this.firestore,'todos');
  //  addDoc(db,{
  //    title,
  //    isDone:false
  //  });

  // }
  getTodo(){

    return collectionData(this.db,{idField:"id"})
  }
  addTodo(title:string){
    let data ={title:title,isDone:false}
    return addDoc(this.db,data)
  }
  deleteTodo(id:string){
    let refDoc = doc(this.firestore, 'todos/'+id);
    return deleteDoc(refDoc);
  }
  updateTodo(id:string,newStatus:boolean){
    let data ={isDone:newStatus}
    let refDocUpdate = doc(this.firestore, 'todos/'+id);
    return updateDoc(refDocUpdate,data);
  }

}

