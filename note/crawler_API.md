all the url below in under 127.0.0.1:3000/cralwer/<describe below>
for example, the list(describe below) it 127.0.0.1:3000/cralwer/list


### list all the exist(crawled) page's url
##### path: /list
##### method: get
No param

---

### request a content of a exist(crawled) page.
##### path: /<the ulr from /list>
##### method: get
No param(get with the url, not param)

---

### ask server to crawl a web
#### path: /
#### method: post
param:
URL=<to crawl web>

