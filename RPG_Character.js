

var RPGCharacterControler = function(game,x,y,imageKey) {
	console.log("creating char");
	console.log(this);
	Phaser.Sprite.call(this, game, x, y, imageKey);
	console.log("sprite");

	this.imageKey = imageKey;

	this.walkAnimationSpeed = 10;

	this.direction = "DOWN";
	this.state = "IDLE";

	this.aniTree = {
		"LEFT":{
			"IDLE": this.animations.add('idle_left', [
           		'walk/walk_left_00'
       		]),
       		"WALK": this.animations.add('walk_left', [
	            'walk/walk_left_00',
	            'walk/walk_left_01',
	            'walk/walk_left_02',
	            'walk/walk_left_03',
	            'walk/walk_left_04',
	            'walk/walk_left_05',
	            'walk/walk_left_06',
	            'walk/walk_left_07',
	            'walk/walk_left_08',
	        ], this.walkAnimationSpeed, true, false)
		},
		"RIGHT":{
			"IDLE": this.animations.add('idle_right', [
           		'walk/walk_right_00'
       		]),
       		"WALK": this.animations.add('walk_right', [
	            'walk/walk_right_00',
	            'walk/walk_right_01',
	            'walk/walk_right_02',
	            'walk/walk_right_03',
	            'walk/walk_right_04',
	            'walk/walk_right_05',
	            'walk/walk_right_06',
	            'walk/walk_right_07',
	            'walk/walk_right_08',
	        ], this.walkAnimationSpeed, true, false)
		},
		"UP":{
			"IDLE": this.animations.add('idle_up', [
           		'walk/walk_up_00'
       		]),
       		"WALK": this.animations.add('walk_up', [
	            'walk/walk_up_00',
	            'walk/walk_up_01',
	            'walk/walk_up_02',
	            'walk/walk_up_03',
	            'walk/walk_up_04',
	            'walk/walk_up_05',
	            'walk/walk_up_06',
	            'walk/walk_up_07',
	            'walk/walk_up_08',
	        ], this.walkAnimationSpeed, true, false)
		},
		"DOWN":{
			"IDLE": this.animations.add('idle_down', [
           		'walk/walk_down_00'
       		]),
       		"WALK": this.animations.add('walk_down', [
	            'walk/walk_down_00',
	            'walk/walk_down_01',
	            'walk/walk_down_02',
	            'walk/walk_down_03',
	            'walk/walk_down_04',
	            'walk/walk_down_05',
	            'walk/walk_down_06',
	            'walk/walk_down_07',
	            'walk/walk_down_08',
	        ], this.walkAnimationSpeed, true, false)
		}
	};

	this.cSpeed = 0;

	game.add.existing(this);
	this.aniTree[this.direction]["WALK"].play();


}

RPGCharacterControler.prototype = Object.create(Phaser.Sprite.prototype);
RPGCharacterControler.prototype.constructor = RPGCharacterControler;

RPGCharacterControler.prototype.update = function() {

    //  Automatically called by World.update
   	this.aniTree[this.direction][this.state].play();

}


var RPGPlayerCharacterControler = function(game,x,y,imageKey) {

	console.log("creating player char");
	RPGCharacterControler.call(this,game,x,y,imageKey);
	console.log("RPGCharacterControler");

    this.keyUP = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.keyUP.onDown.add(this.walkUp, this);
    this.keyUP.onUp.add(this.idle, this);

    this.keyDOWN = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.keyDOWN.onDown.add(this.walkDown, this);
    this.keyDOWN.onUp.add(this.idle, this);

    this.keyLEFT = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.keyLEFT.onDown.add(this.walkLeft, this);
    this.keyLEFT.onUp.add(this.idle, this);

    this.keyRIGHT = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.keyRIGHT.onDown.add(this.walkRight, this);
    this.keyRIGHT.onUp.add(this.idle, this);
}

RPGPlayerCharacterControler.prototype = Object.create(RPGCharacterControler.prototype);
RPGPlayerCharacterControler.prototype.constructor = RPGPlayerCharacterControler;

RPGCharacterControler.prototype.update = function() {

    //  Automatically called by World.update
    //console.log(this.cSpeed);
   	this.body.setZeroVelocity();
   	if(this.cSpeed != 0)
   	{
   		if(this.direction === "UP")
   		{
   			this.body.moveUp(this.cSpeed);
   		}
   		else if(this.direction === "DOWN")
   		{
   			this.body.moveDown(this.cSpeed);
   		}
   		else if(this.direction === "LEFT")
   		{
   			this.body.moveLeft(this.cSpeed);
   		}
   		else if(this.direction === "RIGHT")
   		{
   			this.body.moveRight(this.cSpeed);
   		}
   	}
}


RPGPlayerCharacterControler.prototype.walkUp = function() {
	this.direction = "UP";
	this.state = "WALK";
	this.cSpeed = 200;

	var animation = this.aniTree[this.direction][this.state];
	animation.play()
}

RPGPlayerCharacterControler.prototype.walkDown = function() {
	this.direction = "DOWN";
	this.state = "WALK";
	this.cSpeed = 200;
	var animation = this.aniTree[this.direction][this.state];
	animation.play()
}

RPGPlayerCharacterControler.prototype.walkLeft = function() {
	this.direction = "LEFT";
	this.state = "WALK";
	this.cSpeed = 200;
	var animation = this.aniTree[this.direction][this.state];
	animation.play()
}

RPGPlayerCharacterControler.prototype.walkRight = function() {
	this.direction = "RIGHT";
	this.state = "WALK";
	this.cSpeed = 200;
	var animation = this.aniTree[this.direction][this.state];
	animation.play()
}


RPGPlayerCharacterControler.prototype.idle = function() {
	this.state = "IDLE";
	this.cSpeed = 0
	var animation = this.aniTree[this.direction][this.state];
	animation.play()
}
