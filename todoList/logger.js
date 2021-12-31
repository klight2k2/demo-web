export default function logger(reducer){
    return (prevstate,action,args) => {
        console.group(action);
        console.log("Prev state:",prevstate);
        const nextstate =reducer(prevstate,action,args);
        console.log("Next state:",nextstate);
        console.groupEnd();
        return nextstate;
    }
}