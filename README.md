# joyhome001
joyhome

# rn-lw
reactnative 

forward:  PC->Phone 作为Client客户端,可以任意访问Phone上的 Server 服务器  adb forward tcp:8888 tcp:8888
reverse:反向代理  Phone->PC   adb reverse tcp:8097 tcp:8097  adb reverse tcp:8081 tcp:8081

npm install -g react-devtools
react-devtools

android avd  命令无效，可以重启，使得环境变量彻底生效
adb devices

React-native bundle --platform Android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

打开模拟器
D: cd D:\sdk\tools
emulator.exe -netdelay none -netspeed full -avd api23
打开模拟机dev
adb shell input keyevent 82   ( http://192.168.1.60:8097/ )

8081端口的服务就是React Native项目的一个本地服务器，用于提供JSBundle包和一些静态资源

npm install时 报错Maximum call stack size exceeded 
给npm降级或者升级
降级 ： npm install -g npm@5.4.0
升级 ： npm install -g npm  

react-native   版本
npm info react-native

1> NativeBase  : https://github.com/GeekyAnts/NativeBase/blob/master/README.md 
   npm install native-base --save   
   yarn add react-native-cli --save 
   react-native link
   npm install @expo/vector-icons --save
   
2> react-native link  
   根据package.json文件中的dependencies和devDependencies记录来链接所有需要链接的原生库
   
3> cd D:\sdk\tools
      emulator.exe -netdelay none -netspeed full -avd api23
      adb shell input keyevent 82                            
      cd D:\reactnative_pro\rn-lw  yarn install   react-native link react-native-splash-screen
      
4> nvm ls   nvm use 9.8.0   cd D:\reactnative_pro\rn-lw


5> error: Cannot read property 'pbxprojPath' of null    可以升级项目  Running react-native upgrade then react-native link worked for me as well
   Successfully upgraded this project to react-native v0.55.4  

   
   netstat -aon| findstr "8081"   
   taskkill /F /PID 10760
   
   
   
   Redux的chrome插件  	store注册: window.devToolsExtension ? window.devToolsExtension() : f => f
   
   
   绑定state到props
   绑定action到props（可选）
   将store注入，并用provider在顶层包住组件
   
   
   1.npm ERR! Error: ENOENT, lstat 
	解决办法：
	npm config set user 0 
	npm config set unsafe-perm true


   6》 搭建新项目 create-react-native-app joyhome          react-native  init joyhome
                  expo开始  expo start 
                  转化android ios : npm run eject && expo eject 

      查看 版本  npm view react versions
      安装   npm install  babel-preset-react-native@^4.0.1 --save-dev  --save	  
	  
	  https://www.jianshu.com/p/b5acafba2633
	  查看项目中模块所在的目录  npm root
      查看全局安装的模块所在目录  npm root -g
	  查看当前项目中应用的某个模块的版本号的命令为 npm list 模块名 version
	  查看一个模块的所有信息  npm view 模块名
	  查看某个包对于各种包的依赖关系   npm view 模块名 dependencies
      查看包的源文件地址  npm view 模块名 repository.url
	  查看当前模块依赖的node最低版本号  npm view 模块名 engines
	  检查包是否已经过时  此命令会列出所有已经过时的包，可以及时进行包的更新 npm outdated
	  打开某个模块的文档 npm docs 模块名
	  查看当前已经安装的模块  npm list   当然我们也可以限制输入的模块层级，例如  npm list --depth=0
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    




