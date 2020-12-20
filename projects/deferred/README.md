# @packageforge/deferred

A simple TypeScript Deferred implementation.

Add the package to your project on the command line:
```
npm install @packageforge/deferred --save
```

Import the `Deferred` class into your code file:
```typescript
import { Deferred } from '@packageforge/deferred';
```

To create a deferred

```typescript
deferred = new Deferred<AType>();

deferred.promise.then((v:AType)=>{
  console.log(value);
});

deferred.resolve(new AType());
//value of type AType written to console
```

To create a resolved deferred:

```typescript
deferred = Deferred.resolve(value);
```

To create a rejected deferred:

```typescript
deferred = Deferred.reject(reason);
```
