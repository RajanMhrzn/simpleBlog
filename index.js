var tasklist = [
  {
    id: 1,
    blogTitle: "Blog 1 ",
    blogPost: "This is my first blog ",
    blogComment: "Commented 1",
  },
  {
    id: 2,
    blogTitle: "Food Blog  ",
    blogPost: "This is my second blog written on the topic of foodiee...",
    blogComment: "Commented 2",
  },
  {
    id: 3,
    blogTitle: "Travel Blog ",
    blogPost: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    blogComment: "Commented 3",
  },
];


// ----------Show Blogs-----------

ShowBlogs = () => {
  document.querySelector("#tasklist").innerHTML = "";
  tasklist.forEach((val, index) => {
    document.querySelector("#tasklist").innerHTML += `<br><br>
        <div class="blogCard">
            <h2>${val.blogTitle}</h2><br>
            <h4>${val.blogPost}</h4>
            <button onClick="deleteTask(${val.id})">Delete Post</button>
            <button onClick="commentPost(${val.id})">Comment</button><br>
            <h6>${val.blogComment === undefined ? 'no comments': val.blogComment}</h6>
        </div>
        `;
  });
};
ShowBlogs();



// ----------Add Blogs-----------

const addBlogs = () => {
  const [blogTitle, blogPost] = [
    document.querySelector("#addTitle").value,
    document.querySelector("#addPost").value,
    // document.querySelector("#addComment").value,
  ];
  const id = tasklist[tasklist.length - 1].id + 1;
  tasklist.push({ id:id ,blogTitle: blogTitle, blogPost: blogPost});
  ShowBlogs();
};


// ----------Delete Blogs-----------

const deleteTask = (id) => {
  tasklist = tasklist.filter((val) => val.id !== id);
  ShowBlogs();
};

// ----------Comment Blogs-----------

const commentPost=()=>{
    // document.querySelector("#tasklist").innerHTML = "";
    tasklist.forEach((val, index) => {
    document.querySelector("#tasklist").innerHTML = `<br>
    <input type="textarea" id="addComment"/>
    <button onclick="addCommentPost(${val.id})">Save</button>
    `;
    });
}

const addCommentPost = (i)=>{
    const [blogTitle, blogPost, blogComment]= [
        document.querySelector("#addTitle").value,
        document.querySelector("#addPost").value,
        document.querySelector("#addComment").value,
      ];
      const id = tasklist[tasklist.length - 1].id + 1;
      tasklist.push({ id,blogTitle, blogPost,blogComment});
      ShowBlogs();
}
