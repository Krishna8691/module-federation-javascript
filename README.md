# module-federation-javascript

Module federation example in plain javascript

<!-- This is an example of microfrontend with ModuleFederationWebpackPlugin -->

The example considers a web app where there are two mirco applications cart and products that
are acting as providers and the container is the consumer of both the applications.

The container is webpacks terminology is a remote and the card and products applications are hosts
but consumer and provider seems easy to grasp.

The container should always have common logic and should only cover how things or multiple micro frontends
or micro applications would be communicating with each other. Basically it should be a bridge for all other
micro apps.

To run this project run npm install in the cart, container and products directories
Individually you can run them and see the output on particular ports in the config

If you see the webpack configs you can see that the cart and products both are exposing a component (they ca n expose multiple components or just one which is the entry or the main component depends on what we want to achieve). And the container webpack config has remotes object which uses both the apps. The keywords and keys here matter and needs to match each other.

The shared array holds the packages that are shared between the micro applications. Generally you would want to share it so the container does not load the same package twice when it runs alone. The versionings are properly handled by the plugin itself but you can configure that too.

So to get started you can directly run npm install in container and you should be able to see the output from micro applications as well.
