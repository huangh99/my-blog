const getEnvVar = () => {
  const { VITE_APP_TITLE, VITE_APP_BASE_API } = import.meta.env

  return {
    VITE_APP_TITLE,
    VITE_APP_BASE_API
  }
}

export {
  getEnvVar
}
