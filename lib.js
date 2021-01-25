export function getGameCFG(globalConfig) {
  // 解构赋值
  const { autoEndTime, playAgain, gameConfig } = globalConfig;
  // 扁平化后的对象
  const flattenConfig = {};
  
  // 处理items里的每一个数据
  const handleArrayItemConfig = config => ({ [config.pl_key]: config.value })
  // 处理type为array的数据
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