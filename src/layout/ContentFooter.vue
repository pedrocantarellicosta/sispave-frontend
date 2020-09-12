<template>
  <footer class="footer px-4">
    <div class="row ">
      <div class="col-12">
        <div class="copyright d-flex justify-content-end  text-muted">
          © {{year}} <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Team Chewbacca</a>
        </div>
      </div>
      
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
