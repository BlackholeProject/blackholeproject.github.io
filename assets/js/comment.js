var gitalk = new Gitalk({
  clientID: '49032d909f27598e5c2b',
  clientSecret: 'bf1bc1c933f6a025485bb0233b32a395466f4691',
  repo: 'blackholeproject.github.io',
  owner: 'BlackholeProject',
  admin: ['DepletedPrism', 'aghinouz'],
  id: location.pathname,
  distractionFreeMode: false,
  language: 'zh-CN'
})

gitalk.render('gitalk-container')
