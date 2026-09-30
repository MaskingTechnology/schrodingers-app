# Bonus

What if you're enthusiastic about the concept of Schrödinger's App, but you don't have the option to use [Jitar](https://jitar.dev)? Then this branch shows an example of the same concept using plain Express.

## Differences

Jitar automates the end to end communication between segments. Without Jitar, this needs to be done manually, and is hardwired.

### Code impact 

* The domain logic is untouched.
* Each subdomain has an `infrastructure` folder containing requests and endpoints for each feature. There is no end to end type-safety in this case.
* The app now imports the requests from the infrastructure folder instead of the feature directly.

### Deployment note

When running in production mode, the order process doesn't work because the in-memory event broker doesn't share messages across servers.
