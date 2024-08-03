export default defineNuxtPlugin(() => {
  if (!import.meta.env.SSR) {
    const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
  }
});
