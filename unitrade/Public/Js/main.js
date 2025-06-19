}
  ];

  // Function to render blog posts
  function renderPosts() {
    blogPostsContainer.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-card');
      postElement.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-card-content">
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <a href="${post.link}">Read More</a>
        </div>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }

  // Initialize
  renderPosts();
});