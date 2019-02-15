### Project generated with the following setup:

```
Ionic:

   ionic (Ionic CLI)  : 4.2.1 (C:\Users\<Username>\AppData\Roaming\npm\node_modules\ionic)
   Ionic Framework    : ionic-angular 3.9.3
   @ionic/app-scripts : 3.2.1

System:

   NodeJS : v8.14.0 (C:\Program Files\nodejs\node.exe)
   npm    : 6.4.1
   OS     : Windows 7
   ```
   
### Steps to reproduce:

##### Install Ionic 4
```
npm install -g ionic@4.2.1
```
##### generate blank project
```
ionic start table-layout_test blank
```
##### move to project directory
```
cd table-layout_test
```
##### Install table-layout dependency
```
npm install --save table-layout
```
##### run the project
```
ionic serve
```

This will hopefully open the browser with a blank page.
I have made only changes to home.html and home.ts to use table-layout.

##### the app then fails with the following output:
```
Error: Uncaught (in promise): TypeError: Cannot read property 'columns' of undefined
TypeError: Cannot read property 'columns' of undefined
    at new Table (http://localhost:8100/build/vendor.js:123792:48)
    at new HomePage (http://localhost:8100/build/main.js:71:22)
    at createClass (http://localhost:8100/build/vendor.js:12806:20)
    at createDirectiveInstance (http://localhost:8100/build/vendor.js:12651:37)
    at createViewNodes (http://localhost:8100/build/vendor.js:14109:53)
    at createRootView (http://localhost:8100/build/vendor.js:13998:5)
    at callWithDebugContext (http://localhost:8100/build/vendor.js:15423:42)
    at Object.debugCreateRootView [as createRootView] (http://localhost:8100/build/vendor.js:14706:12)
    at ComponentFactory_.create (http://localhost:8100/build/vendor.js:11603:46)
    at ComponentFactoryBoundToModule.create (http://localhost:8100/build/vendor.js:4355:29)
    at c (http://localhost:8100/build/polyfills.js:3:19752)
    at Object.reject (http://localhost:8100/build/polyfills.js:3:19174)
    at NavControllerBase._fireError (http://localhost:8100/build/vendor.js:51445:16)
    at NavControllerBase._failed (http://localhost:8100/build/vendor.js:51438:14)
    at http://localhost:8100/build/vendor.js:51485:59
    at t.invoke (http://localhost:8100/build/polyfills.js:3:14976)
    at Object.onInvoke (http://localhost:8100/build/vendor.js:5085:33)
    at t.invoke (http://localhost:8100/build/polyfills.js:3:14916)
    at r.run (http://localhost:8100/build/polyfills.js:3:10143)
    at http://localhost:8100/build/polyfills.js:3:20242
```

### Note: Making changes to `./node_modules/table-layout/index.js` you will have to rerun ionic serve for changes to take effect.
