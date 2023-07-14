<template>
    <div class="testimoni">
        <div class="judul text-center text-4xl">
            <strong><span style="color: #67002B">What our customers say</span>
            <br />
            <span style="color: #67002B">about our </span>
            <span style="color: #FAFAFA">sweets</span></strong>
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
  }
  
  .photo-row {
    display: flex;
  }
  
  .photo-row img {
    width: 16.66667%;
    object-fit: cover;
  }
</style>
  