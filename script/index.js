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

function displayCategory(categories) {
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
    categoryContainer.append(categoryDiv);
  }
}
const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    console.log(video);

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
loadVideo();

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }
