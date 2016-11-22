What've been changed:

```otwp-group-member.service.ts```
1. Variable name ```response``` to the ```responseData``` in order to prevent confusing with existing type ```Response```

2. ```reponseData``` type to ```string``` in order to perform testing and verify that it's working

3. ```setTimeout``` function with callback inside in order to simulate "Asynchronous" behaviour

```otwp-group-member.service.spec.ts```

1. Improved isolated unit test using default ```done()``` function from Jasmine. 

2. * ```methodResponse```
    * ```responseData```
    
    changed to string in order to test them from original service.
    
####It's possible to run unit-tests using current configuration