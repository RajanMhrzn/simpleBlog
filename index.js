var tasklist= [
    {
        id:1,
        blogTitle:'Blog1 ',
        blogPost:'This is my first blog '
    },
    {
        id:2,
        blogTitle:'Blog2 ',
        blogPost:'This is my second blog'
    }

];

 ShowBlogs = ()=>{
    document.querySelector('#tasklist').innerHTML = '';
    tasklist.forEach((val,index)=>{
        document.querySelector('#tasklist').innerHTML += `<br>
        <h2>${val.blogTitle}</h2><br>
        <h4>${val.blogPost}</h4>
        <button onClick="editData(${val.id}">Edit Post</button>
        <button onClick="deleteTask(${val.id})">Delete Post</button>
        <button onClick="addComment(${val.id}">Comment</button><br><br>
        `;
    });
}
ShowBlogs();

const addBlogs=()=>{
    const [blogTitle, blogPost]=[
        document.querySelector('#addTitle').value,
        document.querySelector('#addPost').value,
    ];
    const id = tasklist[tasklist.length -1].id+1;
    tasklist.push({
        id,blogTitle,blogPost
    });
    ShowBlogs();
}

const deleteTask= id =>{
    tasklist = tasklist.filter(val => val.id !== id);
    ShowBlogs();
}

const editData = (i)=>{
    document.querySelector('#addTitle').value = tasklist[i].blog;
    document.querySelector('#addPost').value = tasklist[i].blog;
}

const saveEditData=()=>{
    const arrIndex = tasklist.findIndex(v=>v.id==id);
    const title = document.querySelector('#addTitle').value;
    const post = document.querySelector('#addPost').value;
    tasklist[arrIndex].title = title;
    tasklist[arrIndex].post = post;
    ShowBlogs();
}
// const addComment = (i)=>{
//     document.querySelector('#addPost').value = tasklist[i].blog;
// }