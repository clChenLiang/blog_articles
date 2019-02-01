## image

1. 查看本地的 `image` 镜像
```docker images```

2. 查看 container 
```docker container ls```
```docker ps -a // 查看全部，不仅是活动着的容器```

3. 运行进入容器
```docker run -it XXXX /bin/bash```
```docker run -itd XXXX /bin/bash```
```docker attach XXX```

4. 停止容器
```docker stop XXXX```

5. 删除容器
```docker rm XXXX```

6. $( ... ) 符号