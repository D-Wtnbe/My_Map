<template>
  <v-app>
    <Header />
    <!-- <SideBar /> -->
    <!-- <SideBar2 /> -->
    <v-main class="ma-4">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Layout/Header";
import Footer from "@/components/Footer";
// import SideBar2 from "@/components/Layout/SideBar2";
// import SideBar from "@/components/Layout/SideBar";

export default {
  name: "App",
  components: {
    Header,
    Footer
    // SideBar2
    // SideBar
  }
};
</script>