## 时隔好久忽然想写点代码了

react node express 搭个小例子



首先如何解决reactApp 跨域访问 node服务:

```  
   "proxy": "http://127.0.0.1:8889/",
   "eslintConfig": {
     "extends": "react-app"
   }
设置代理让我们的react与node服务不再跨域
```
启动服务：
```
    cnpm start
    cd ./nodeServer 
    node service.js
```

静态路由实现：
```$xslt
   渲染从index.js开始    
   <BrowserRouter>
      <Root/>
   </BrowserRouter>, document.getElementById('root')
   
   获取RootDOM元素，这个RootDOM元素就是我们写的路由，然后渲染出来：
   <switch>
           <Route
                 path="/"
                 render={props => (
                     <FirstIndex>
                         <Switch>
                             <Route path="/home" component={App} />
                             <Route path="/student" component={nightStudy} />
                             {/*路由不正确时，默认跳回home页面*/}
                             <Route path="/" exact component={App} />
                             <Route render={() => <Redirect to="/" />} />
                         </Switch>
                     </FirstIndex>
                 )}
             />
   </switch>
   
   
   然后获取名为root的DOM元素，这个DOM元素在index.html上
   <div id="root"></div>       
    
   
   
```

*****
写一下遇到的问题和额外知识：

react-route 与  react-route-dom 有什么区别？
react-router-dom只是4.0版本从react-router分离出来的部分

如何存储cookie？
我是利用js-cookie包来实现的，
```
cnpm install js-cookie --save
```
你想存储或者删除cookie的地方
```
import Cookies from 'js-cookie'

Cookies.set('userName', 123); 就可以把我们想存的值通过key value的方式存储起来

Cookies.get('userName');   可以把我们上面存储的cookie拿出来供我们使用
```





