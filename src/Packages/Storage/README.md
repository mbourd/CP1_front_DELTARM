# How to use Storage service

## Example

```tsx
// ...
 const {
   isGetting, getError, value, get,
   isSetting, setError, set,
   isRemoving, removeError, remove
 } = useStorage();

 if (isGetting) {
   console.log('getting ...');
 }

 if (getError) {
   console.log('An error occurred when getting value from storage');
 }

 if (value) {
   console.log(value);
 }
 // ...
 <p onClick={() => get('hello')}>Get from storage</p>
 // ...
```
