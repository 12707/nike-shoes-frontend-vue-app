### Nike Interview Frontend Code Challenge [Vue]

_The provided code document should contain more details._

## Use Cases
```
1. Nike Air Max 95 SE
    - The state excepts to show "Best time to buy!" when its price is less than 120.
    - The state excepts to show "Moderate state, can buy now!" when its price is between 120 and 150(including 120 and 150).
    - The state excepts to show "Can wait for discount." when its price is greater than 150.
2. Nike Air Max 97 SE
    - The state excepts to show "Best time to buy!" when its price is less than 5.
    - The state excepts to show "Moderate state, can buy now!" when its price is between 5 and 150(including 5 and 150).
    - The state excepts to show "Can wait for discount." when its price is greater than 150.
3. Nike Air Max Pre-Day
    - The state excepts to show "Best time to buy!" when its price is less than 120.
    - The state excepts to show "Moderate state, can buy now!" when its price is between 120 and 160(including 120 and 160).
    - The state excepts to show "Can wait for discount." when its price is greater than 150.
4. Nike Air Max 270
    - The state excepts to show "Best time to buy!" when its price is less than 100.
    - The state excepts to show "Moderate state, can buy now!" when its price is between 100 and 130(including 100 and 130).
    - The state excepts to show "Can wait for discount." when its price is greater than 130.
5. Nike Renew Ride 3
    - The state excepts to show "Best time to buy!" when its price is less than 180.
    - The state excepts to show "Moderate state, can buy now!" when its price is between 180 and 200(including 180 and 200).
    - The state excepts to show "Can wait for discount." when its price is greater than 200.
6. Nike Air Max 90
    - The state excepts to show "Best time to buy!" when its price is less than 120.
    - The state excepts to show "Moderate state, can buy now!" when its price is between 120 and 200(including 180 and 200).
    - The state excepts to show "Can wait for discount." when its price is greater than 200.
```

## Thought
```
Description about code changes and improvement
    1. Separate service codes with business layer, the benifits are that making codes more clear and easy to reuse.
    2. Add unit tests with multiple scenarios to cover all logics.
What would be added further
    1. Make more stable and reusable components.
    2. Make multiply layers architecture, such as MVC. 
    3. Encapsulate logic units, modulize system business logic.
    4. Monitoring codes quality. send warning info to stakeholder when codes are breached.
    5. Build DevOps, automatically execute building, testing, deployment.
    6. Performance tuning. figure out the most optimized algorithms to improve it.
    7. Dockerlization. build a strong foundation for PaaS.
    8. Create standard and norm. make it easy to start for newcomers.
What were your doubts and assumptions
    If possible, the project should be more meaningful, which means that it needs to resolve practical bussiness problems
    and improve the effiency of business and show more useful and reliable info to users. 
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development (Port 8080)
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

You need to start backend server (on port 8081), to be able to see live data in the frontend app.
