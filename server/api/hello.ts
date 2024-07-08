export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  // In server, you can now access config.apiSecret, in addition to config.public
  console.log(config.public.apiBase)
})
