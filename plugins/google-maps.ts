export default defineNuxtPlugin(() => {
  if (!import.meta.env.SSR) {
    const config = useRuntimeConfig();
    const googleMapsApiKey = config.public.googleMapsApiKey;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
  }
});
