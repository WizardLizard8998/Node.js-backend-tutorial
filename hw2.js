const post = [
    {post: "post1"},
    {post: "post2"},
    {post: "post3"},
    {post: "post4"}
];


const listPost = () => {
    post.map(data => {console.log(data);});
}


const addpost = (newpost) => {
    
    const promise = new Promise((resolve,reject) => {
       
        post.push(newpost);
        resolve();


    });

    return promise;
}


addpost({post:"post promise"}).then(listPost);