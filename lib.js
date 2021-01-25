export function getGameCFG(globalConfig) {
  const { autoEndTime, playAgain, gameConfig } = globalConfig;
  const flattenConfig = {};

  const handleArrayItemConfig = config => ({ [config.pl_key]: config.value })
  const traverseArrayConfig = config => (config.type === 'array' ? Object.assign(...config.items.map(traverseArrayConfig)) : handleArrayItemConfig(config))

  for (const [key, config] of Object.entries(gameConfig)) {
    if (config.type !== "array" && typeof config.value !== "undefined") {
      flattenConfig[key] = config.value
    } else if (config.type === 'array') {
      config.items && config.items.forEach(item => Object.assign(flattenConfig, traverseArrayConfig(item)))
    }
  }
  return {
    autoEndTime,
    playAgain,
    ...flattenConfig
  };
}
