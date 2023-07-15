<template>
    <div class="testimoni relative">
      <div class="relative">
        <div class="mochi-image flex items-center justify-center z-10">
          <img src="~/assets/Testimoni/mochiOnWood.png" alt="mochiOnWood" class="w-1/3 sm:w-1/2 md:w-1/4" />
        </div>
        <div class="background-pink absolute inset-0 mt-20 text-4xl">
          <svg width="1280" height="100" viewBox="0 0 1920 113" fill="#FBBBC2" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 113C960 -37.6667 1536 -37.6667 1920 113H0Z"/>
          </svg>
        </div>
        <div class="content mt-12">
        <div class="judul text-center text-4xl relative z-10 ml-auto">
          <strong>
            <span style="color: #67002B">What our customers say</span>
            <br />
            <span style="color: #67002B">about our </span>
            <span style="color: #FAFAFA">sweets</span>
          </strong>
        <div class="flex items-end justify-end mr-10">
          <img src="~/assets/Testimoni/Vector.png" alt="Vector" class="w-42 h-40" />
        </div>
      </div>
      <div class="photo-row mt-10">
        <img src="~/assets/Testimoni/testimoni1.png" alt="Testimonial 1" />
        <img src="~/assets/Testimoni/testimoni2.png" alt="Testimonial 2" />
        <img src="~/assets/Testimoni/testimoni3.png" alt="Testimonial 3" />
        <img src="~/assets/Testimoni/testimoni4.png" alt="Testimonial 4" />
        <img src="~/assets/Testimoni/testimoni5.png" alt="Testimonial 5" />
        <img src="~/assets/Testimoni/testimoni6.png" alt="Testimonial 6" />
      </div>
    </div>
</div>
    </div>
  </template>
  
  <style scoped>
  .testimoni {
    /* Your custom styles here */
  }
  .judul {
    font-family: 'Carter One', cursive;
    margin-top: -20px;
  }
  
  .photo-row {
    display: flex;
  }
  
  .photo-row img {
    width: 16.66667%;
    object-fit: cover;
    /* Your custom styles here */
  }
  
  .mochi-image {
    z-index: 1;
  }
  
  .background-pink {
    z-index: -1;
  }

  .content {
    background-color: #FBBBC2;
  }

  </style>
  