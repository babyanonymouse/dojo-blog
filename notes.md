# Notes

What i've learnt. referrals to the code.

## React router

1. the components are able to switch without the client contacting the server. eg:

   - clicking on home link will call the contact component since it's nested in a switch.

2. the navbar won't change since it's not nested in a switch component

### Exact Match Routes

1. adding `exact` attribute to make sure the paths on the browser are unique
   - essential in `/` paths

### Router Links

1. intercepts server requests and loads the respective page/component on the browser
   - displays as anchor tags in inspect

### useEffect Cleanup

- when we click `home`, the data fetch process begins, but if we switch to `new blog` faster(before the fetch is complete), it brings an error since the data fetched cannot be displayed on an unmounted component
  - we have to use the abortcontroller to abort the fetch if the component is changed and still maintain the error messages
