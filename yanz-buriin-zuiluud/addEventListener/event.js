

// onchange, oninput  
// change, input

// .addEventListener('change', 
// URL.createObjectURL(image.files);

// variable.classList.remove('className')
// vairable.classList.add('classNmae')

const img = document.querySelector('#img');
const avatar = document.querySelector('#avatar')
const load = document.querySelector('.fa-spinner')



// img.addEventListener('change', function() {
//     const image = img.files[0];
//     avatar.src = URL.createObjectURL(image);
// })

// img.addEventListener('click', function() {
//     load.style.display = 'block';
// })

function zurag() {
    const image = img.files[0];
    avatar.src = URL.createObjectURL(image);
    avatar.style.visibility = 'visible'
    load.style.display = 'none';
}

// img.addEventListener('change', setTimeout(zurag, 1000))

img.addEventListener('change', function() {
    avatar.style.visibility = 'hidden'
    load.style.display = 'block';
    setTimeout(zurag, 3000)
})
