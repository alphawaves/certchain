# Certchain

----------



### Setting up for blockchain

1. Install `truffle` using `npm`.

   ```bash
   npm install -g truffle
   ```

2. Install `ganache` from the [Ganache official website](https://truffleframework.com/ganache).

3. Run `ganache` for providing a virtual local EVM.

4. Then for compilation and deployment, move to `/blockchain/` in your terminal and execute the following commands:

   ```bash
   #For compiling the solidity scripts
   truffle compile
   
   #For migration and deployment to the local ganache server
   truffle migrate
   ```

5. Testing out the deployment on local EVM Server:

   ```bash
   #For testing out the functions within the terminal after deployment
   truffle console
   #And in the console for getting the contract into app object
   > DocumentHelper.deployed().then(function(instance){app=instance});
   
   #For getting the list of available methods
   > app.methods
   
   #For calling out a method within contract
   > app.myMethod(parameters);
   ```



### Running the backend server
Run the `App` class under the `backend/src/main/java` folder after gradle build.
   
