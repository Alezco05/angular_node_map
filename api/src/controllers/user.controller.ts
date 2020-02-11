import knex from '../database/database';

export async function getHome(req:any, res:any){
    return res.json({"message": "ok"});
}

export async function getUser(){
    knex("usuario").then((data:any) => console.log(data));
}
