<template>
  <div class="p-5">
    <div class="text-center map-responsive">
      <iframe
        width="600"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=jl%20citandui%20no%202%20cikini%20indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.map-responsive {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>