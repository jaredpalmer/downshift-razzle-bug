# Downshift Razzle Bug

Despite adding [`Downshift.resetIdCounter()` in `./src/server.js`](https://github.com/jaredpalmer/downshift-razzle-bug/blob/master/src/server.js#L15), Downshift still breaks React 16 hydration. :sad:

### Screenshot

![screenshot 2018-02-22 18 09 36](https://user-images.githubusercontent.com/4060187/36569418-b99fe938-17fb-11e8-972c-6a21eb527972.png)

### UPDATE:

The solution is to pass an `id` prop to `<Downshift>`'s `input`:

```js
//...
<input
  {...getInputProps({
    id: 'whatever-you-want',
    placeholder: 'Favorite fruit ?',
  })}
/>
```
