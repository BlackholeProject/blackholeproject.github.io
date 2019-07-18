var gitalk = new Gitalk({
  clientID: 'b3ea4fecb63727152102',
  clientSecret: '5879d4df4b5b5aa1a95a91de6d7236819fb86650',
  repo: 'deprism.github.io',
  owner: 'DePrism',
  admin: ['DePrism'],
  id: location.pathname,
  distractionFreeMode: false,
  language: 'zh-CN'
})

gitalk.render('gitalk-container')