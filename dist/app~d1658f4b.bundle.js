(()=>{"use strict";var n,A={756:(n,A,e)=>{e.d(A,{Z:()=>a});var t=e(537),r=e.n(t),i=e(645),o=e.n(i)()(r());o.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n/*\n * Header\n *\n */\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: 600;\n  font-size: 4em;\n  margin: 0.5em 0.25em;\n  display: inline-block;\n  color: #212121;\n}\n\n.header__menu {\n  font-size: 40px;\n  margin: 10px auto;\n  text-align: center;\n  display: block;\n  width: 45px;\n  text-decoration: none;\n  color: #212121;\n}\n\n\n/*\n * Top level navigation\n */\n\n.nav {\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 30%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #616161;\n  transition: 0.3s opacity;\n  font-weight: bold;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  opacity: 0.5;\n}\n\n\n/*\n * Jumbotron\n */\n\n/* .hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url('../public/images/hero-image_1.jpg');\n  background-position: bottom;\n  background-color: rgb(52, 52, 52);\n  background-repeat: no-repeat;\n  background-size: cover;\n} */\n\n.hero {\n  width: 100%;\n  height: 35rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.hero-img {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.hero-img img {\n  object-fit: cover;\n  width: 100%;\n  height: 35rem;\n}\n\n.hero__inner {\n  /* margin: 0 auto;\n  max-width: 800px;\n  background-color: rgba(50, 50, 50, 0.5);\n  padding: 1rem;\n  border-radius: 10px; */\n  width: 80%;\n  text-align: center;\n  background-color: rgba(50, 50, 50, 0.5);\n  padding: 1rem;\n  border-radius: 10px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  height: 44px;\n}\n\n\n/*\n * main\n */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n#content {\n  padding: 20px;\n}\n\n/*\n * latest\n */\n\n.newest {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.newest__label {\n  font-size: 32px;\n  font-weight: semibold;\n}\n\n.newest__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 2px solid #a0a0a0;\n}\n\n/*\n * post\n */\n\n.posts {\n  margin: 36px auto auto;\n  text-align: left;\n}\n\n/*\n * post item\n */\n\n.post-item {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.post-item__content {\n  padding: 16px;\n}\n\n.post-item__thumbnail {\n  width: 100%;\n  height: 55%;\n  overflow: hidden;\n}\n\n.post-item__rate {\n  font-size: 12px;\n  color: #222;\n}\n\n.Rate {\n  color: #fff;\n  background-color: blue;\n  padding: 2px;\n  border-radius: 5px;\n  margin: 0 4px 0 0;\n}\n\n.post-item__location {\n  color: red;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.post-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.post-item__title:hover {\n  opacity: 0.5;\n}\n\n.post-item__title a {\n  padding: 0.9rem 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.post-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* jumlah baris maksimal */\n  -webkit-box-orient: vertical;\n}\n\n/*\n  Detail Page\n*/\n\n/* restaurant */\n\n.resto {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.restaurant__title {\n  text-align: center;\n}\n\n.restaurant-poster {\n  margin: 0 1rem;\n  width: 90%;\n}\n\n.restaurant-info h3,h4, p {\n  margin: 0.5rem 1rem;\n}\n\n.menus h3 {\n  margin: 0.5rem 1rem;\n}\n\n.restaurant__overview h3 {\n  margin: 0.5rem 1rem;\n}\n\n.hidden-text {\n  display: none;\n}\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n * footer\n */\n\nfooter {\n  background-color: #494949;\n  padding: 1.5em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter p {\n  padding: 1.3em;\n  color: #fff\n}\n\n.skip-link {\n\tposition: absolute;\n\ttop: -100px;\n\tleft: 0;\n\tbackground-color: #2dbf17;\n\tcolor: white;\n\tpadding: 10px;\n\tfont-size: 20px;\n\tz-index: 100;\n\ttext-decoration: none\n}\n.skip-link:focus {\n\ttop: 100px\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n/*\n * Header\n *\n */\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: 600;\n  font-size: 4em;\n  margin: 0.5em 0.25em;\n  display: inline-block;\n  color: #212121;\n}\n\n.header__menu {\n  font-size: 40px;\n  margin: 10px auto;\n  text-align: center;\n  display: block;\n  width: 45px;\n  text-decoration: none;\n  color: #212121;\n}\n\n\n/*\n * Top level navigation\n */\n\n.nav {\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 30%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #616161;\n  transition: 0.3s opacity;\n  font-weight: bold;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  opacity: 0.5;\n}\n\n\n/*\n * Jumbotron\n */\n\n/* .hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-image: url('../public/images/hero-image_1.jpg');\n  background-position: bottom;\n  background-color: rgb(52, 52, 52);\n  background-repeat: no-repeat;\n  background-size: cover;\n} */\n\n.hero {\n  width: 100%;\n  height: 35rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.hero-img {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.hero-img img {\n  object-fit: cover;\n  width: 100%;\n  height: 35rem;\n}\n\n.hero__inner {\n  /* margin: 0 auto;\n  max-width: 800px;\n  background-color: rgba(50, 50, 50, 0.5);\n  padding: 1rem;\n  border-radius: 10px; */\n  width: 80%;\n  text-align: center;\n  background-color: rgba(50, 50, 50, 0.5);\n  padding: 1rem;\n  border-radius: 10px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  position: absolute;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 36px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  height: 44px;\n}\n\n\n/*\n * main\n */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n#content {\n  padding: 20px;\n}\n\n/*\n * latest\n */\n\n.newest {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.newest__label {\n  font-size: 32px;\n  font-weight: semibold;\n}\n\n.newest__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 2px solid #a0a0a0;\n}\n\n/*\n * post\n */\n\n.posts {\n  margin: 36px auto auto;\n  text-align: left;\n}\n\n/*\n * post item\n */\n\n.post-item {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.post-item__content {\n  padding: 16px;\n}\n\n.post-item__thumbnail {\n  width: 100%;\n  height: 55%;\n  overflow: hidden;\n}\n\n.post-item__rate {\n  font-size: 12px;\n  color: #222;\n}\n\n.Rate {\n  color: #fff;\n  background-color: blue;\n  padding: 2px;\n  border-radius: 5px;\n  margin: 0 4px 0 0;\n}\n\n.post-item__location {\n  color: red;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.post-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: 16px;\n  transition: 0.3s opacity;\n}\n\n.post-item__title:hover {\n  opacity: 0.5;\n}\n\n.post-item__title a {\n  padding: 0.9rem 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n.post-item__description {\n  margin-top: 16px;\n  font-size: 12px;\n  line-height: 1.5em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* jumlah baris maksimal */\n  -webkit-box-orient: vertical;\n}\n\n/*\n  Detail Page\n*/\n\n/* restaurant */\n\n.resto {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.restaurant__title {\n  text-align: center;\n}\n\n.restaurant-poster {\n  margin: 0 1rem;\n  width: 90%;\n}\n\n.restaurant-info h3,h4, p {\n  margin: 0.5rem 1rem;\n}\n\n.menus h3 {\n  margin: 0.5rem 1rem;\n}\n\n.restaurant__overview h3 {\n  margin: 0.5rem 1rem;\n}\n\n.hidden-text {\n  display: none;\n}\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n * footer\n */\n\nfooter {\n  background-color: #494949;\n  padding: 1.5em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter p {\n  padding: 1.3em;\n  color: #fff\n}\n\n.skip-link {\n\tposition: absolute;\n\ttop: -100px;\n\tleft: 0;\n\tbackground-color: #2dbf17;\n\tcolor: white;\n\tpadding: 10px;\n\tfont-size: 20px;\n\tz-index: 100;\n\ttext-decoration: none\n}\n.skip-link:focus {\n\ttop: 100px\n}"],sourceRoot:""}]);const a=o},948:(n,A,e)=>{e.d(A,{Z:()=>a});var t=e(537),r=e.n(t),i=e(645),o=e.n(i)()(r());o.push([n.id,".posts {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n  }\r\n  \r\n  @media screen and (max-width: 499px) {\r\n    .nav {\r\n      z-index: 10;\r\n      background-color: #fff;\r\n      width: 500px;\r\n      position: absolute;\r\n  \r\n      /* This trasform moves the drawer off canvas. */\r\n      -webkit-transform: translate(-500px, 0);\r\n      transform: translate(-500px, 0);\r\n  \r\n      /* Optionally, we animate the drawer. */\r\n      transition: transform 0.5s ease;\r\n    }\r\n  \r\n    .open {\r\n      -webkit-transform: translate(0, 0);\r\n      transform: translate(0, 0);\r\n    }\r\n  \r\n    .nav__item {\r\n      display: list-item;\r\n      border-bottom: 1px solid #E0E0E0;\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 500px) {\r\n    .header__menu {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 650px) {  \r\n    .post-item__content {\r\n      padding: 16px 32px 32px 32px;\r\n    }\r\n  \r\n    .post-item__title {\r\n      font-size: 18px;\r\n    }\r\n  \r\n    .post-item__description {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 700px) {\r\n    .posts {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-column-gap: 10px;\r\n      grid-row-gap: 16px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 800px) {\r\n    .nav__list {\r\n      max-width: 800px;\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 900px) {\r\n    .posts {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 1200px) {\r\n    main {\r\n      max-width: 1200px;\r\n    }\r\n  }","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,kBAAkB;EACpB;;EAEA;IACE;MACE,WAAW;MACX,sBAAsB;MACtB,YAAY;MACZ,kBAAkB;;MAElB,+CAA+C;MAC/C,uCAAuC;MACvC,+BAA+B;;MAE/B,uCAAuC;MACvC,+BAA+B;IACjC;;IAEA;MACE,kCAAkC;MAClC,0BAA0B;IAC5B;;IAEA;MACE,kBAAkB;MAClB,gCAAgC;MAChC,WAAW;MACX,gBAAgB;IAClB;EACF;;EAEA;IACE;MACE,aAAa;IACf;EACF;;EAEA;IACE;MACE,4BAA4B;IAC9B;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,eAAe;IACjB;EACF;;EAEA;IACE;MACE,aAAa;MACb,8BAA8B;MAC9B,qBAAqB;MACrB,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,gBAAgB;MAChB,cAAc;IAChB;EACF;;EAEA;IACE;MACE,aAAa;MACb,kCAAkC;IACpC;EACF;;EAEA;IACE;MACE,iBAAiB;IACnB;EACF",sourcesContent:[".posts {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n  }\r\n  \r\n  @media screen and (max-width: 499px) {\r\n    .nav {\r\n      z-index: 10;\r\n      background-color: #fff;\r\n      width: 500px;\r\n      position: absolute;\r\n  \r\n      /* This trasform moves the drawer off canvas. */\r\n      -webkit-transform: translate(-500px, 0);\r\n      transform: translate(-500px, 0);\r\n  \r\n      /* Optionally, we animate the drawer. */\r\n      transition: transform 0.5s ease;\r\n    }\r\n  \r\n    .open {\r\n      -webkit-transform: translate(0, 0);\r\n      transform: translate(0, 0);\r\n    }\r\n  \r\n    .nav__item {\r\n      display: list-item;\r\n      border-bottom: 1px solid #E0E0E0;\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 500px) {\r\n    .header__menu {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 650px) {  \r\n    .post-item__content {\r\n      padding: 16px 32px 32px 32px;\r\n    }\r\n  \r\n    .post-item__title {\r\n      font-size: 18px;\r\n    }\r\n  \r\n    .post-item__description {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 700px) {\r\n    .posts {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-column-gap: 10px;\r\n      grid-row-gap: 16px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 800px) {\r\n    .nav__list {\r\n      max-width: 800px;\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 900px) {\r\n    .posts {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 1200px) {\r\n    main {\r\n      max-width: 1200px;\r\n    }\r\n  }"],sourceRoot:""}]);const a=o},46:(n,A,e)=>{var t=e(379),r=e.n(t),i=e(795),o=e.n(i),a=e(569),d=e.n(a),s=e(565),p=e.n(s),E=e(216),l=e.n(E),C=e(589),g=e.n(C),m=e(756),B={};B.styleTagTransform=g(),B.setAttributes=p(),B.insert=d().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=l(),r()(m.Z,B),m.Z&&m.Z.locals&&m.Z.locals},362:(n,A,e)=>{var t=e(379),r=e.n(t),i=e(795),o=e.n(i),a=e(569),d=e.n(a),s=e(565),p=e.n(s),E=e(216),l=e.n(E),C=e(589),g=e.n(C),m=e(948),B={};B.styleTagTransform=g(),B.setAttributes=p(),B.insert=d().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=l(),r()(m.Z,B),m.Z&&m.Z.locals&&m.Z.locals}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return A[n](i,i.exports,t),i.exports}t.m=A,n=[],t.O=(A,e,r,i)=>{if(!e){var o=1/0;for(p=0;p<n.length;p++){for(var[e,r,i]=n[p],a=!0,d=0;d<e.length;d++)(!1&i||o>=i)&&Object.keys(t.O).every((n=>t.O[n](e[d])))?e.splice(d--,1):(a=!1,i<o&&(o=i));if(a){n.splice(p--,1);var s=r();void 0!==s&&(A=s)}}return A}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[e,r,i]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={954:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var r,i,[o,a,d]=e,s=0;if(o.some((A=>0!==n[A]))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(d)var p=d(t)}for(A&&A(e);s<o.length;s++)i=o[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(p)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var r=t.O(void 0,[946,2,495,337,268],(()=>t(253)));r=t.O(r)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map