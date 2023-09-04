class ExternalScene extends window.BaseScene {
    constructor() {
        super({
            name: "local",
            player: {
                spawn: {
                    x: 210,
                    y: 280,
                },
            },
            map: {
                tilesetUrl: "http://localhost:5500/public/tileset.png", // Don't forget to add the tileset.png file in the public folder
            },
            // mmo: {
            //   enabled: true,
            //   url: "ws://localhost:2567",
            //   roomId: "community_island",
            // },
        });
    }

    create() {
        super.create();
    }
}