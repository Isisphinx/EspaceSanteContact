;(function (d, t) {
  var BASE_URL = 'https://chatwoot.espacesante.fr'
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0]
  g.src = BASE_URL + '/packs/js/sdk.js'
  s.parentNode.insertBefore(g, s)
  g.onload = function () {
    window.chatwootSDK.run({ websiteToken: 'PEGrTmGXvxo7yVuqcPNK2ttp', baseUrl: BASE_URL })
  }
})(document, 'script')
