const api = [
    {
        "id" : 0,
        "name" : "Hassan"
    },
    {
        "id" : 1,
        "name" : "Bilal"
    },
]

api.reduce((data)=>{
    const {...api} = data;
    console.log(api);
})