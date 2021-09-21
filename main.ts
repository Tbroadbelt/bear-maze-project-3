scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e . . . e e e . . . 
    . . . . e 3 e . . . e 3 e . . . 
    . . . . e e e e e e e e e . . . 
    . . . . e 1 1 e e e 1 1 e . . . 
    . . . . e 1 f e e e f 1 e . . . 
    . . . . e e 5 f f f 5 e e . . . 
    . . . . e e 5 f f f 5 e e . . . 
    . . . . e e 5 5 f 5 5 e e . . . 
    . . . . e e 5 f f f 5 e e . . . 
    . . . . . . e e e e e . . . . . 
    . . . . e e e e e e e e e . . . 
    . . . . e e e e e e e e e . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . e e e . e e e . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenNorth)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
