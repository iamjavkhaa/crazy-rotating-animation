let whoLoggedIn;
let postIdNote = -1;
if(localStorage.whoLoggedIn != undefined) {
    whoLoggedIn = JSON.parse(localStorage.whoLoggedIn);
}
const newPostParent = document.querySelector('.main');
const newPostInput = document.querySelector('#new-post-input');
let comments;
let posts;

if(localStorage.posts != undefined || localStorage.posts === '[]') {
    posts = JSON.parse(localStorage.posts)
} else  {
    posts = []; 
}



newPostInput.addEventListener('keyup', (event)=> {
    if(event.keyCode === 27) {
        newPostCanceled();
    }
});


function postSync() {
    if(localStorage.posts != undefined || localStorage.posts == '[]') {
        posts.forEach(function(el) {
            let newPost = document.createElement('div');
            newPost.id = 'new-post';
        
            let whoPosted = document.createElement('div');
            whoPosted.id = 'whoPosted';
            JSON.parse(localStorage.users).forEach((a)=> {
                if(a.id == el.userId) {
                    whoPosted.innerText = a.firstname;
                }
            })

    
            let newPostText = document.createElement('div');
            newPostText.id = 'new-post-text';
            newPostText.innerText = el.post;
    
            let circleEllips = document.createElement('i');
            circleEllips.className = 'fa-regular fa-trash-can';
            circleEllips.id = 'trashCan';
            whoPosted.appendChild(circleEllips);
    

            let postId = document.createElement('input');
            postId.className = "postId";
            // postId.value = JSON.parse(el.id);
            postId.value = el.id;

            let divider = document.createElement('div');
            divider.className = 'divider';

            let commentsParent = document.createElement('div');
            commentsParent.id = 'commentsParent';

            let addCommentEl = document.createElement('input');
            addCommentEl.id = 'addCommentEl';
            addCommentEl.placeholder = 'add comment';


            if(localStorage.comments != undefined) {

                JSON.parse(localStorage.comments).forEach((commentPar) => {
                    if(el.id == commentPar.postId ) {
                        let newComment = document.createElement('div');
                        newComment.id = 'newComment';
                
                        let newCommentOwner = document.createElement('div');
                        newCommentOwner.id = 'newCommentOwner';
                        
                        let commentUserIdCheck;
                        let commentUserCheck = JSON.parse(localStorage.users).forEach(
                            (usersForEach) => {
                                if(usersForEach.id == commentPar.userId) {
                                    commentUserIdCheck = usersForEach.firstname 
                                    console.log('--------------------------------')
                                    console.log(usersForEach)
                                }
                            }
                        );
                        newCommentOwner.innerText = commentUserIdCheck; 
                
                        let newCommentText = document.createElement('p');
                        newCommentText.id = 'newCommentText';
                        newCommentText.innerText = commentPar.comment;
                
                
                        newComment.appendChild(newCommentOwner);
                        newComment.appendChild(newCommentText);
                        commentsParent.appendChild(newComment);
                
                    }
                });
            }
 

            newPost.appendChild(postId);
            newPost.appendChild(whoPosted);
            newPost.appendChild(newPostText);
            newPost.appendChild(divider);
            newPost.appendChild(commentsParent);
            newPost.appendChild(addCommentEl);


            newPostParent.appendChild(newPost);
        });
    }
}
postSync();

newPostInput.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        addPost();
    }
})

// Array.prototype.breakableForEach()

function addPost() {
    if(/[^ ]/.test(newPostInput.value) === true) {
        let newPost = document.createElement('div');
        newPost.id = 'new-post';

        let whoPosted = document.createElement('div');
        whoPosted.id = 'whoPosted';

        let newPostText = document.createElement('div');
        newPostText.id = 'new-post-text';
        newPostText.innerText = newPostInput.value;

        posts.push({post: newPostInput.value,   id: postIdNote + 1,   userId: whoLoggedIn.id });
        localStorage.posts = JSON.stringify(posts)
        postIdNote = postIdNote + 1;

        // if(localStorage.posts == "[]" || localStorage.posts === undefined) {
        //     localStorage.posts = JSON.stringify([{post: newPostInput.value, id: postIdNote, userId: whoLoggedIn.id }])
        // } else {
        // }

        let circleEllips = document.createElement('i');
        circleEllips.className = 'fa-regular fa-trash-can';
        circleEllips.id = 'trashCan';
        
        let postId = document.createElement('input');
        postId.className = "postId";
        postId.value = postIdNote;

        let divider = document.createElement('div');
        divider.className = 'divider';

        let commentsParent = document.createElement('div');
        commentsParent.id = 'commentsParent';

        let addCommentEl = document.createElement('input');
        addCommentEl.id = 'addCommentEl';
        addCommentEl.placeholder = 'add comment';


        newPost.appendChild(postId);
        newPost.appendChild(whoPosted);
        newPost.appendChild(newPostText);
        newPost.appendChild(divider);
        newPost.appendChild(commentsParent);
        newPost.appendChild(addCommentEl);


        let idOfPost = whoPosted.parentElement.firstElementChild.value;
        let postedUserId;

        if(localStorage.posts != undefined && localStorage.posts != '[]') {
            posts.forEach(
                (arg) => {
                    console.log(idOfPost , '===' , arg.id)  
                    if(idOfPost == arg.id) {    
                        postedUserId = arg.userId;
                        console.log(postedUserId);
                    }
                }
            )
        }

        // JSON.parse(localStorage.users).forEach(         //  forEach() iin orond every ashiglaj bolno 
        //     (arg) => {
        //         console.log(arg.id , '----' , postedUserId)
        //         if(arg.id == postedUserId) {
        //             whoPosted.innerText = arg.firstname;
        //         } 
        //     }
        // )

        for(var i = 0; i < JSON.parse(localStorage.users).length; i++) {
            console.log(JSON.parse(localStorage.users)[i].id , '----' , postedUserId)
            if(JSON.parse(localStorage.users)[i].id == postedUserId) {
                whoPosted.innerText = JSON.parse(localStorage.users)[i].firstname;
                break;
            }
        }

        // JSON.parse(localStorage.users).forEach(
        //     (arg) => {
        //         if(arg.id == postedUserId) {
        //             whoPosted.innerText = arg.firstname;
        //         }
        //     }
        // );

        whoPosted.appendChild(circleEllips);



        newPostParent.appendChild(newPost);

        newPostInput.value = '';
        newPostCanceled();
    }
}

function newPostTyping() {    
    let enlarge = document.querySelector('.create-new-post');
    let btn = document.querySelector('#new-post-btn');
    let input = document.querySelector('#new-post-input');
    enlarge.style.width = '500px';
    enlarge.style.position = 'absolute';
    enlarge.style.height = '350px';
    enlarge.style.left = '37%';
    enlarge.style.top = '27%';
    enlarge.style.paddingTop = '.3em';
    enlarge.style.boxShadow = '0 0 0 1000vh #00000094';

    input.style.marginTop = '28px';
    input.style.width = '69%';
    input.style.height = '27%';
    input.placeholder = 'What"s on your mind ' + whoLoggedIn.firstname;
    btn.style.height = '2.3rem';


    let xBtnParent = document.createElement('div');
    let xBtn = document.createElement('i');
    xBtn.className = 'fa-solid fa-circle-xmark';
    xBtnParent.className = 'xBtnParent';
    xBtnParent.appendChild(xBtn);

    if(enlarge.firstElementChild.className != 'xBtnParent') {
        enlarge.insertBefore(xBtnParent, enlarge.children[0]);
    }

    xBtn.addEventListener('click', newPostCanceled);
}

function newPostCanceled() {
    let enlarge = document.querySelector('.create-new-post');
    let btn = document.querySelector('#new-post-btn');
    let input = document.querySelector('#new-post-input');
    enlarge.style.width = '100%';
    enlarge.style.position = 'static';
    enlarge.style.height = '';
    enlarge.style.left = '';
    enlarge.style.top = '';
    enlarge.style.paddingTop = '';
    enlarge.style.boxShadow = 'none';

    input.style.marginTop = '';
    input.style.width = '';
    input.style.height = '';
    input.value = '';
    btn.style.height = '';

    document.activeElement.blur();
    enlarge.removeChild(enlarge.firstElementChild);
}


function deletePost(a) {
    if(a.target.id === 'trashCan') {
        a.target.parentElement.parentElement.remove();
        let posts = JSON.parse(localStorage.posts)
        let postsUpdate = [];

        posts.forEach (
            function(el) {
                console.log(el.id, '---' , a.target.parentElement.parentElement.firstElementChild.value)
                if(el.id == a.target.parentElement.parentElement.firstElementChild.value ) {
                    // posts.splice(a.target.parentElement.parentElement.firstElementChild.value , 1);
                    // console.log(el.id , 'iim id tai postiig Delete hiilee')
                    console.log('устгах постны ID олдлоо')
                    console.log(el.id , '==' , a.target.parentElement.parentElement.firstElementChild.value)
                } else {
                    postsUpdate.push(el)
                    console.log(el)
                }
            }
        );
        localStorage.posts = JSON.stringify(postsUpdate);
        console.log(postsUpdate)

        let comments = JSON.parse(localStorage.comments);
        let commentsUpdated = [];

        for(var i = 0; i < comments.length; i++) {
            if(comments[i].postId != a.target.parentElement.parentElement.firstElementChild.value) {
                commentsUpdated.push(comments[i]);
                localStorage.comments = JSON.stringify(commentsUpdated);
            } 
            // else {
            //     localStorage.comments = JSON.stringify(commentsUpdated)
            //     // console.log('delete hiih nohtsol biylsengui. Reason:  ');
            //     // console.log(comments[i].postId , '===' ,  a.target.parentElement.parentElement.firstElementChild.value)
            // } 
        }
    }
}


function addComment(newCommentInput) {
    let commentsParent = document.querySelector('commentsParent');

    if(newCommentInput.value !== '' && /[^ ]/.test(newCommentInput.value) === true ){
        if(localStorage.comments != undefined) {
            comments = JSON.parse(localStorage.comments)
        } else  {
            comments = []; 
        }
        
        let newComment = document.createElement('div');
        newComment.id = 'newComment';

        let newCommentOwner = document.createElement('div');
        newCommentOwner.id = 'newCommentOwner';
        newCommentOwner.innerText = whoLoggedIn.firstname;

        let newCommentText = document.createElement('p');
        newCommentText.id = 'newCommentText';
        newCommentText.innerText = newCommentInput.value;


        newComment.appendChild(newCommentOwner);
        newComment.appendChild(newCommentText);
        newCommentInput.previousElementSibling.appendChild(newComment);

        // --  local storage ruu hiih   START
        
        comments.push( {comment: newCommentInput.value, userId: whoLoggedIn.id, postId: newCommentInput.parentElement.firstChild.value } )

        localStorage.comments = JSON.stringify(comments)

        console.log(JSON.parse(localStorage.comments))
        // --  local storage ruu hiih   END
        
        newCommentInput.value = '';
    }
}



document.addEventListener('click', (event) => {
    if(event.target.id === 'addCommentEl') {
        event.target.addEventListener('keyup', (key) => {
            if(key.keyCode === 13) {
                addComment(key.target);
            };
        });
    }
});

document.addEventListener('click', deletePost);


// let posts = [];
// let post = {post: 'post 1'};
// post.next = {comment: 'comment 1'}
// post.push({comment: 'orj irsen utga'})


// let posts = [{post: 'any post'},    {post: 'another post'}]


// class Utga {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Utga(val);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }

// let list = new SinglyLinkedList();
// // list.push(1);
// // console.log(list)






// posts?userId=3&limit=1
// url + ? + params=value



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(result){
//         console.log(result)
//         let usersData = result;
//         result.forEach((user)=>{
//             document.body.insertAdjacentHTML('afterbegin', `
//                 <h1 id="userName-${user.id}">${user.name}</h1>
//             `)
//         })
//     })

// function showPosts(event) {
//     console.log(event.target)
// }

// <input 333333=id hidden />  ---------------> ene argaar gardh irsen post deeree local storage deerees songoj ustgah id g ogch bolno

// document.addEventListener('click', (a)=>{
//     if(a.target.id.split('-')[0] === 'userName') {
//         console.log(a.target.innerText)
//         console.log(a.target.id.split('-')[1])
//         let selectedUserId = a.target.id.split('-')[1]; 
//         getPosts(selectedUserId)
//     }
// })

// function getPosts(id){
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id) 
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(result){
//             console.log(result)
//         })
// }