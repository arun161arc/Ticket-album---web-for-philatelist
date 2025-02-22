document.querySelector('.btn-secondary').addEventListener('click', function() {
    alert('Welcome to the StampWala Community! click OK to jump on next page' )
    ;
});
// Open the lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Display the selected image in the lightbox
function currentImage(index) {
    let images = document.getElementsByClassName('gallery-img');
    let expandedImg = document.getElementById('expandedImg');
    let captionText = document.getElementById('caption');

    expandedImg.src = images[index - 1].src;
    captionText.innerHTML = images[index - 1].alt;
 }

// function of login btn
const btn = document.getElementsByClassName('btn-login')
const loginbtn = btn[0]
const logininterface = document.getElementById('login-interface')

loginbtn.addEventListener('click', function(e){
    console.log(e);
    if(logininterface.style.display == 'none' || logininterface.style.display==''){
        logininterface.style.display = 'block';
    }else{
        logininterface.style.display = 'none'
    }
});

 // Selecting the login button, close button, and modal
// const loginBtn = document.querySelector('.btn-login');
// const closeBtn = document.querySelector('#close-login-modal');
// const modal = document.querySelector('#login-modal');

// // Show the modal when login button is clicked
// loginBtn.onclick = function() {
//     modal.style.display = 'block';
// }

// // Hide the modal when close button is clicked
// closeBtn.onclick = function() {
//     modal.style.display = 'none';
// }

// // Close the modal when clicking outside of it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }

document.querySelector('.wrapper').addEventListener('click',function(e){
    let removeit = e.target.parentNode;
    const toberemoved = document.querySelector('.wrapper');
    if(e.target.tagName =='DIV' || e.target.tagName =='SPAN' || e.target.tagName =='H2' || e.target.tagName=='ION-ICON' ){
    toberemoved.style.display='none';}
})



