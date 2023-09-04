# Template Community Island (JavaScript)

A simple template for Sunflower Land Community Island.

## Getting Started

Once the template cloned on your computer, you need to intall the dependencies using

`npm install`

Everything's installed? Nice! Now to host your local island you can use

`npm run dev`

This command will start a little web server on your computed on the **port 5500**.

## Adding your own map & tileset

Nice so you have your local island ready and running, now let's add your map and tileset!

Browse through the folder `/public`, there you can already see a basic `map.json` which we'll remove and replace with your own map file exported from Tiled.

In the same folder, you also need to add your own `tileset.png`.

## Accessing your local island

Now that your island is ready and hosted, you need to access it no?

Let's do that, there's two way.

### Using Sunflower Land Testnet

Head to Sunflower Land's Testnet using https://sunflower-land.com/testnet

Once you're logged in change the url to https://sunflower-land.com/testnet/#/community-tools and enter http://localhost:5500/public

### Using Sunflower Land on local

Clone [Sunflower Land](https://github.com/sunflower-land/sunflower-land/)'s repository on your computer then run these commands.

`yarn` to install all the dependencies
`yarn dev` to start Sunflower Land on local

Once Sunflower Land is up and running, use this URL to access Community Island part

http://localhost:3000/#/community-tools and enter http://localhost:5500/public

## Congrats! 🎉

Your local island is now ready to be used and worked on!

If you need help to create your map, have a look at [our Documentation](https://docs.sunflower-land.com/contributing/community-islands/designing-maps)!

If you want to step up a bit by creating/implementing your own Custom Server, [have a look here](https://github.com/0xSacul/template-community-island-server)!
