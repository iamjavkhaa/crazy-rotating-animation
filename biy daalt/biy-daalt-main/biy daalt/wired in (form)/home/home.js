let whoLoggedIn = JSON.parse(localStorage.whoLoggedIn);
const newPostParent = document.querySelector('.main');
const newPostInput = document.querySelector('#new-post-input');


if(localStorage.posts != undefined) {
    posts = JSON.parse(localStorage.posts)
} else  {
    posts = []; 
}

// console.log('User: ', whoLoggedIn);

function postSync() {
    if(localStorage.posts != undefined) {
        JSON.parse(localStorage.posts).forEach(function(el) {
            let newPost = document.createElement('div');
            newPost.id = 'new-post';
        
            let whoPosted = document.createElement('div');
            whoPosted.id = 'whoPosted';
            whoPosted.innerText = whoLoggedIn.firstname;
        
            let newPostText = document.createElement('div');
            newPostText.id = 'new-post-text';
            newPostText.innerText = el.post;
    
            let circleEllips = document.createElement('i');
            circleEllips.className = 'fa-regular fa-trash-can';
            circleEllips.id = 'trashCan';
            whoPosted.appendChild(circleEllips);


            let hiddenIdSpan = document.createElement('div');
            hiddenIdSpan.className = "hiddenIdSpan";
            hiddenIdSpan.id = el.id;
            newPost.appendChild(hiddenIdSpan);

    
            newPost.appendChild(whoPosted);
            newPost.appendChild(newPostText);
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

function addPost() {
    if(/[^ ]/.test(newPostInput.value) === true) {
        let newPost = document.createElement('div');
        newPost.id = 'new-post';

        let whoPosted = document.createElement('div');
        whoPosted.id = 'whoPosted';
        whoPosted.innerText = whoLoggedIn.firstname;

        let newPostText = document.createElement('div');
        newPostText.id = 'new-post-text';
        newPostText.innerText = newPostInput.value;

        if(localStorage.posts == undefined) {
            localStorage.posts = JSON.stringify([{post: newPostInput.value, id: 0}])
        } else {
            let posts = JSON.parse(localStorage.posts);
            posts.push({post: newPostInput.value,   id: JSON.parse(localStorage.posts).length  });
            localStorage.posts = JSON.stringify(posts)
        }

        let circleEllips = document.createElement('i');
        circleEllips.className = 'fa-regular fa-trash-can';
        circleEllips.id = 'trashCan';
        whoPosted.appendChild(circleEllips);


        let hiddenIdSpan = document.createElement('div');
        hiddenIdSpan.className = "hiddenIdSpan";
        hiddenIdSpan.id = JSON.parse(localStorage.posts).length -1;
        newPost.appendChild(hiddenIdSpan);



        console.log(JSON.parse(localStorage.posts));
        newPost.appendChild(whoPosted);
        newPost.appendChild(newPostText);
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
    xBtn.addEventListener('click', newPostCanceled)
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
        console.log(a.target.parentElement.parentElement.firstElementChild.parentElement.firstChild);
        console.log(JSON.parse(localStorage.posts));
        let posts = JSON.parse(localStorage.posts);
        posts.forEach((obj)=>{
            if(obj.id == a.target.parentElement.parentElement.firstElementChild.id) {
                posts.splice(a.target.parentElement.parentElement.firstElementChild.parentElement.firstChild, 1);
                localStorage.posts = JSON.stringify(posts);
                console.log(posts)
            }
        });


        a.target.parentElement.parentElement.remove();
    }
}

document.addEventListener('click', deletePost)


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
