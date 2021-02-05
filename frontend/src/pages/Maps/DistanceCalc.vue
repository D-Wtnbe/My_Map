<template>
  <main>
    <OriginDestinationForm />
    <RouteList />
    <DirectionsMapView />
  </main>
</template>

<script>
import OriginDestinationForm from "@/components/map/OriginDestinationForm";
import RouteList from "@/components/map/RouteList";
import DirectionsMapView from "@/components/map/DirectionsMapView";

export default {
  components: { OriginDestinationForm, RouteList, DirectionsMapView }
};
</script>