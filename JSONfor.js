//for the given json iterate over all for loops (for for in for of foreach)


var anime=[{
    "name":"Demonslayer",
    "Genres": "Action",
    "Episodes": "26",
    
},
{
    "name":"one piece",
    "Genres": "Action",
    "Episodes": "nil",
    
},
{
    "name":"naruto",
    "Genres": "Action",
    "Episodes": "220",
    
}];
console.log(anime.Genres);


// // for loop 
console.log("JSON iteration using for : ");
for(var i=0;i<anime.length;i++)
{
    console.log(anime[i]);
}



// //for-in loop json
console.log("JSON iteration using for-in : ");
for(var a in anime)
{
   console.log(a  , anime[a]);
}


// // //for-of loop json
console.log("JSON iteration using for-of : ");
for(var a of anime)
{
   console.log(a);
}

//for-each loop json
console.log("JSON iteration using for-each : ");
anime.forEach(x => console.log(x.name));
