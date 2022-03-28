;(function (d, t) {
  var BASE_URL = 'https://chat.espacesante.fr'
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0]
  g.src = BASE_URL + '/packs/js/sdk.js'
  s.parentNode.insertBefore(g, s)
  g.onload = function () {
    window.chatwootSDK.run({ websiteToken: 'ZgYrodSLd6UreR8dp1yNWw6r', baseUrl: BASE_URL })
  }
})(document, 'script')
