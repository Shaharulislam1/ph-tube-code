function loadCategory() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
}

function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideo(data.videos));
}

const loadCategoryVideo = (id) => {
  const url = `
      https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${id}`);
      clickedButton.classList.add("active")
      displayVideo(data.category);
    });
};

function displayCategory(categories) {
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="loadCategoryVideo(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
    categoryContainer.append(categoryDiv);
  }
}
const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  if (videos.length == 0) {
    videoContainer.innerHTML = `
    <div class="col-span-full flex flex-col justify-center items-center text-center py-5 gap-4 mt-5">
        <img class="w-[130px]" src="assets/Icon.png" alt="" />
        <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
      </div>
    `;
    return;
  }
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
   <div class="card">
            <figure class="relative">
              <img class="w-full h-[210px] object-cover"
                src="${video.thumbnail}"
                alt="" />
                <span class="absolute bottom-2 right-2 text-white bg-black text-sm px-1 rounded-sm">3hrs 56 min ago</span>
            </figure>
            <div class=" py-4 flex gap-3 px-0">
                <div>
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-9 rounded-full">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="space-y-2">
                    <h2 class="text-sm font-semibold">${video.title}</h2>
                    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}<img class=" w-5" src="https://img.icons8.com/?size=96&id=102561&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">${video.others.views} views</p>
                </div>
                
            </div>
          </div>
    `;
    videoContainer.append(videoCard);
  });
};

loadCategory();

