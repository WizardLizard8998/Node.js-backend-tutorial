const  promise = new Promise((resolve,reject) => { // promise structure  first funct caught is the response
    resolve("done");
    reject("error"); 
})


promise.then(value => { console.log(value)}).catch(err => { console.log(err)});



const books = [ // with promise
    { name: "kitap 1", author: "yazar1" },
    { name: "kitap 2", author: "yazar2" },
    { name: "kitap 3", author: "yazar3" },
  ];
   

  const listbook= () => {
    books.map(value => {console.log(value)})
  };


  const addbook = (newbook) =>{
    
    const promise = new Promise((resolve,reject) => {

        books.push(newbook);
        resolve();
    });

    return promise;
  };


  addbook({name: "kitap promise",author:"yazar promise"}).then(listbook);
  