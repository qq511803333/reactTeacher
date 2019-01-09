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
