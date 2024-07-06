document.addEventListener("DOMContentLoaded", function () {
  const allPosts = document.querySelectorAll(".profilepostview");
  const picturePosts = document.querySelectorAll(".picturepost");
  const videoPosts = document.querySelectorAll(".videopost");
  const posterPosts = document.querySelectorAll(".posterpost");
  const typedata = document.getElementById("typedata");
  const homeBtn = document.getElementById("homebtn");
  const postsBtn = document.getElementById("postsbtn");
  const reelsBtn = document.getElementById("reelsbtn");
  const postersBtn = document.getElementById("postersbtn");
  const userbio = document.getElementById("userbio");
  const menuicon = document.querySelectorAll(".menuicon");
  const closebutton = document.getElementById("closeviewbtn");
  const modal = document.getElementById("realpostview");
  const modalImage = document.getElementById("contentstar");
  const modalDescription = document.getElementById("descriptioncontent");
  const modalShare = document.getElementById("contentshare").querySelector("a");
  const searchInput = document.getElementById("searchtext");
  const searchButton = document.getElementById("searchbtn");
  const posts = document.querySelectorAll(".profilepostview");

  function hideAllPosts() {
    allPosts.forEach((post) => {
      post.style.display = "none";
    });
  }

  function showAllPosts() {
    allPosts.forEach((post) => {
      post.style.display = "block";
    });
    userbio.scrollIntoView();
    typedata.innerText = "All";
    clearMenuBorders();
  }

  function showPicturePosts() {
    clearMenuBorders();
    postsBtn.style.borderBottom = "5px solid yellowgreen";
    postsBtn.style.borderRadius = "5px";
    hideAllPosts();
    picturePosts.forEach((post) => {
      post.style.display = "block";
    });
    userbio.scrollIntoView();
    typedata.innerText = "Pictures";
  }

  function showVideoPosts() {
    clearMenuBorders();
    reelsBtn.style.borderBottom = "5px solid yellowgreen";
    reelsBtn.style.borderRadius = "5px";
    hideAllPosts();
    videoPosts.forEach((post) => {
      post.style.display = "block";
    });
    userbio.scrollIntoView();
    typedata.innerText = "Videos";
  }

  function showPosterPosts() {
    clearMenuBorders();
    postersBtn.style.borderBottom = "5px solid yellowgreen";
    postersBtn.style.borderRadius = "5px";
    hideAllPosts();
    posterPosts.forEach((post) => {
      post.style.display = "block";
    });
    userbio.scrollIntoView();
    typedata.innerText = "Posters";
  }

  function clearMenuBorders() {
    menuicon.forEach((menu) => {
      menu.style.borderBottom = "none";
    });
  }

  function closeModal() {
    modal.style.display = "none";
    const videoElement = modal.querySelector("video");
    if (videoElement) {
      videoElement.pause();
    }
  }

  function showPostDetails(event) {
    const post = event.currentTarget;
    const backgroundImageURL = window.getComputedStyle(post).backgroundImage;
    const imageURL = backgroundImageURL.slice(5, -2);

    modalImage.src = imageURL;
    modalDescription.innerText = post.innerText;
    modalShare.href = imageURL;
    modalImage.setAttribute("download", "");
    modal.style.display = "flex";
  }

  function showvPostDetails(event) {
    const post = event.currentTarget;
    const backgroundImageURL = window.getComputedStyle(post).backgroundImage;
    const videoURL = backgroundImageURL.slice(5, -6) + ".mp4";

    realpostmedia.innerHTML = "";

    const videoElement = document.createElement("video");
    videoElement.setAttribute("width", "100%");
    videoElement.setAttribute("height", "100%");
    videoElement.setAttribute("controls", "");
    videoElement.setAttribute("autoplay", "");
    videoElement.style.objectFit = "contain";

    const sourceElement = document.createElement("source");
    sourceElement.setAttribute("src", videoURL);
    sourceElement.setAttribute("type", "video/mp4");

    videoElement.appendChild(sourceElement);
    realpostmedia.appendChild(videoElement);

    modalDescription.innerText = post.innerText;
    modalShare.href = videoURL;
    modal.style.display = "flex";
  }

  picturePosts.forEach((post) => {
    post.addEventListener("click", showPostDetails);
  });

  videoPosts.forEach((post) => {
    post.addEventListener("click", showvPostDetails);
  });

  posterPosts.forEach((post) => {
    post.addEventListener("click", showPostDetails);
  });

  homeBtn.addEventListener("click", showAllPosts);
  postsBtn.addEventListener("click", showPicturePosts);
  reelsBtn.addEventListener("click", showVideoPosts);
  postersBtn.addEventListener("click", showPosterPosts);
  closebutton.addEventListener("click", closeModal);
  searchbtn.addEventListener("click", searchFunction);

  function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const contents = document.querySelectorAll(".content");

    contents.forEach((content) => {
      if (content.textContent.toLowerCase().includes(input)) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  }

  function filterPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    posts.forEach((post) => {
      const postContent = post.textContent.toLowerCase();
      if (postContent.includes(searchTerm)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterPosts);
  searchButton.addEventListener("click", filterPosts);
});
