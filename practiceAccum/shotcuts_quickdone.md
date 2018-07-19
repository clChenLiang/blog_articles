#### Windows 命令行
1. 查看端口占用
   `netstats -ano | findstr 80`
2. 查看 `pid` 对应的程序
   `tasklist | findstr pid`
3. 终止指定程序
   `taskkill /F /pid pid`
