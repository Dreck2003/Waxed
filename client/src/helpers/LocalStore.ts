
const SetItem=(key:string,objeto:any) => {

    if (!key) throw new Error("The key is empty");
    if(typeof key !== 'string') throw new Error('The key is not string');

   return window.localStorage.setItem(key,objeto);
}


const GetItem=(key:string) => {

    if (!key) throw new Error("The key is empty");
    if(typeof key !== 'string') throw new Error('The key is not string');

    return window.localStorage.getItem(key);

}

const RemoveItem=(key:string) => {

    if(!key) throw new Error('The key is empty');
    if (typeof key !== "string") throw new Error("The key is not string");

    const remove= window.localStorage.getItem(key);
    window.localStorage.removeItem(key);
    return remove;

}


export default {
    set:SetItem,
    get:GetItem,
    del:RemoveItem,
}