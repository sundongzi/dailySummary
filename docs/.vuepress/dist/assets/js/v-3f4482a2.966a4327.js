(self.webpackChunkdaily_summary=self.webpackChunkdaily_summary||[]).push([[2914],{1160:(a,e,r)=>{"use strict";r.r(e),r.d(e,{data:()=>s});const s={key:"v-3f4482a2",path:"/%E5%8D%9A%E5%AE%A2%E5%AD%A6%E4%B9%A0/%E9%87%8D%E5%AE%9A%E5%90%91%20&&%20%E8%BD%AC%E5%8F%91.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"博客学习/重定向 && 转发.md",git:{updatedTime:1615448503e3,contributors:[{name:"sundong",email:"sundong@idss-cn.com",commits:1}]}}},953:(a,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>p});const s=(0,r(6252).uE)('<h4 id="转发-重定向"><a class="header-anchor" href="#转发-重定向">#</a> 转发 &amp;&amp; 重定向</h4><h5 id="一、转发是服务器行为-重定向是客户端行为"><a class="header-anchor" href="#一、转发是服务器行为-重定向是客户端行为">#</a> 一、转发是服务器行为，重定向是客户端行为</h5><p>1、转发过程</p><p>![image-20200718202343069](/Users/sundong/Library/Application Support/typora-user-images/image-20200718202343069.png)</p><p>需要注意的是转发的路径必须是同一个容器下的url，不能转发到其他容器路径上去，中间传递的是自己容器内的request请求。浏览器地址不会发生变化，客户无法感觉到服务器做了转发。并且转发行为浏览器只做了一次访问请求。</p><p>2、重定向过程</p><p>![image-20200718202916648](/Users/sundong/Library/Application Support/typora-user-images/image-20200718202916648.png)</p><p>这里location可以重定向到任意URL，既然是浏览器重新发出了请求，则就没有什么request传递的概念了。在客户浏览器路径栏显示的是其重定向的路径，客户可以观察到地址的变化的。重定向行为是浏览器做了<code>至少两次</code>的访问请求的。</p><h5 id="ps-重定向时的网址可以是任何网址-转发的网址必须是本站点的网址"><a class="header-anchor" href="#ps-重定向时的网址可以是任何网址-转发的网址必须是本站点的网址">#</a> PS：重定向时的网址可以是任何网址 转发的网址必须是本站点的网址</h5><h5 id=""><a class="header-anchor" href="#">#</a></h5>',10),p={render:function(a,e){return s}}}}]);