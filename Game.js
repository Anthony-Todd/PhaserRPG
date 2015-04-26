
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

    create: function () {

        this.game.physics.startSystem(Phaser.Physics.P2JS);


        // create this.player sprite
        this.player = new RPGPlayerCharacterControler(this.game, 128, 128, 'player');
        this.game.physics.p2.enable(this.player);

        this.playButton = this.add.button(8, 8, 'buttons', this.quitGame, this, 'quit_over', 'quit_normal', 'quit_pressed');
        this.playButton.fixedToCamera = true;

        this.camera.follow(this.playerTank,Phaser.Camera.FOLLOW_TOPDOWN);

    },

    update: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
/*
        this.player.body.setZeroVelocity();
        var speed = 200;
        if (this.cursors.left.isDown)
        {
            this.player.direction = 'LEFT';
            this.player.body.moveLeft(speed);
            this.player.animations.play('walk_left');
        }
        else if (this.cursors.right.isDown)
        {
            this.player.direction = 'RIGHT';
            this.player.body.moveRight(speed);
            this.player.animations.play('walk_right');
        }
        else if (this.cursors.up.isDown)
        {
            this.player.direction = 'UP';
            this.player.body.moveUp(speed);
            this.player.animations.play('walk_up');
        }
        else if (this.cursors.down.isDown)
        {
            this.player.direction = 'DOWN';
            this.player.body.moveDown(speed);
            this.player.animations.play('walk_down');
        }
        else
        {
            if(this.player.direction == 'LEFT')
            {
                this.player.animations.play('idle_left');
            }
            else if(this.player.direction == 'RIGHT')
            {
                
                this.player.animations.play('idle_right');
            }
            else if(this.player.direction == 'UP')
            {
                
                this.player.animations.play('idle_up');
            }
            else if(this.player.direction == 'DOWN')
            {
                this.player.animations.play('idle_down');
            }
        }
        */
    },

    render: function () {

        this.game.debug.spriteInfo(this.player, 20, 32);

    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        //this.state.start('MainMenu');

    }

};
