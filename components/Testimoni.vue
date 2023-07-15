<template>
    <div class="testimoni relative">
      <div class="mochi-image flex items-center justify-center">
        <img src="~/assets/Testimoni/mochiOnWood.png" alt="mochiOnWood" class="w-1/3 sm:w-1/2 md:w-1/4" />
      </div>
      <div class="flex items-center justify-center">
      <div class="judul text-center text-4xl relative z-10 ml-auto">
        <strong><span style="color: #67002B">What our customers say</span>
        <br />
        <span style="color: #67002B">about our </span>
        <span style="color: #FAFAFA">sweets</span></strong>
      </div>
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
  </template>
  
  <style scoped>
  .testimoni {
    background-color: #FBBBC2;
  }
  
  .judul {
    font-family: 'Carter One', cursive;
    margin-right: 180px;
    margin-top: -20px;
  }
  
  .photo-row {
    display: flex;
  }
  
  .photo-row img {
    width: 16.66667%;
    object-fit: cover;
  }
  
  .mochi-image {
    z-index: 1;
  }
  
  @media (max-width: 640px) {
    .mochi-image img {
      width: 80%;
    }
  }
  </style>
  