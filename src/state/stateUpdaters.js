const deleteJob = (joblist, id) => {
    const newJoblist = joblist.reduce((acc, item, i) => {        
        if(item.id !== id) acc.push(item)
        return acc;
    },[])  
    console.log(newJoblist) 
    return newJoblist;
}

// Not fully complete as doesn't work if deleting index 0

module.exports = {
    deleteJob
}