#### nuxt.js(SSR Server Site Render)

* 简而言之，Nuxt.js是帮助Vue.js轻松完成服务端渲染工作的框架。Nuxt.js预设了服务端渲染所需要的各种配置，如异步数据，中间件，路由。
* 三大框架全家桶中的一部分（服务端渲染）它好比是 [Angular Universal]之于 [Angular],[Next.js]之于 [React]。
* 解决SEO的问题,当百度搜索引擎爬虫爬取的时候  通过URL  产生对服务器的请求，服务器根据URL，响应页面，因此百度就获取到了我们站点的数据

#### 路由改变是否请求？

* 刷新，地址栏回车=> URL改变，服务端渲染
* 点击nuxt-link组件，点击a标签，禁止a标签的页面跳转，并根据其href属性，通过history.pushState改变地址栏，并发起请求或者具体的客户端渲染行为，局部替换内容

* nuxt 前端路由沿用了history模式，通过history.pushState 更改url，进而局部渲染组件
* 而首屏刷新的时候，通过后端计算并模板渲染，再将html相应给客户端，一定程度解决了首屏白屏的问题

#### 目录结构

assets中存放需要响应的js、css、img等文件
components下存放公共组件
layouts下存放头体底组件
middleware中间件--运行中发生的事
pages页面
static不需要编译，管理缓存的文件

#### 页面编写
在pages下编写的页面会自动生成路由
pages
    |index.vue -->'/'
    |home.vue  -->'/home'
    |text/index.vue -->'/test'
    |text/home.vue -->'/test/home'

#### 脚手架

* ``` vue init nuxt-community/starter-template <project-name>```

#### 整体预览

* __vue前端渲染照旧(history)__
* 后端渲染补充
  * asyncData(context):  函数需要return {} ；  该数据会与组件内的data结合，在后端渲染组件前被调用
  * fetch(context):  在组件被创建前调用，用来同步Vuex内store数据
  * context属性
    * ![1530693415072](assets\1530693415072.png)

#### 便捷使用axios

* ## Install

  ```cmd
  $ npm i -S @nuxtjs/axios @nuxtjs/proxy
  ```

  ## Nuxt.config.js

  ```js
  {
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
    ],
    proxy: [
      ['/api/dog', { target: 'https://dog.ceo/', pathRewrite: { '^/api/dog': '/api/breeds/image/random' } }]
    ]
  }
  ```

  ### Use Axios

  ```js
  // 服务端
  async asyncData({ app }) {
    const ip = await app.$axios.$get('http://icanhazip.com')
    return { ip }
  }
  // 客户端
  created() {
  	this.$axios.get('url');
  }
  ```



