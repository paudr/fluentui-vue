const components = {
}

export default {
  install (app) {
    for (const name in components) {
      const kebabName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      const componentName = 'fluentui-' + kebabName
      app.component(componentName, components[name])
    }
  }
}
