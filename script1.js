// Create a new post and add it to the community
function createPost() {
    const postContent = document.getElementById('post-content').value;

    if (postContent === '') {
        alert('Please write something before posting!');
        return;
    }

    const postContainer = document.createElement('div');
    postContainer.className = 'post';

    const postTitle = document.createElement('h4');
    postTitle.textContent = 'User Post';
    postContainer.appendChild(postTitle);

    const postBody = document.createElement('p');
    postBody.textContent = postContent;
    postContainer.appendChild(postBody);

    document.getElementById('posts-container').appendChild(postContainer);

    // Clear the textarea
    document.getElementById('post-content').value = '';
}
