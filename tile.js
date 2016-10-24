


var Tile = function() {
	this.shape = null;
	this.rotation = null;
	this.color = null;
	this.getColor = function () {
		return this.color;
	}
	this.getShape = function() {
		return this.shape;
	}
	this.getRotation = function() {
		return this.rotation;
	}
	this.create = function() {
		var randomShape = ['Tshape', 'Xshape', 'Ishape', 'Lshape'][Math.round(Math.random() * (3 - 0) + 0)];
		this.shape = shape[randomShape][Math.round(Math.random() * (3 - 0) + 0)];
		this.color = color[Math.round(Math.random() * (3 - 0) + 0)];

	}
}
var roation = [ 1, 0];
var color =  ['#fe3435', '#0b2bfe', '#09fe0a', '#fee411']
var shape = {
	Tshape : [[false, false, false,
			   true,  true, true,
			  false,  true, false],

			  [false, true, false,
			   false, true, true,
			   false, true, false],

			   [false, true, false,
			    true,  true, true,
			    false, false, false],

			    [false, true, false,
			      true, true, false,
			      false, true, false]],

	Xshape : [[true, false, true,
				false,true, false,
				true, false, true],

			   [false, true, false,
			     true, true, true,
			     false, true, false],

			     [true, false, true,
				false,true, false,
				true, false, true],

			   [false, true, false,
			     true, true, true,
			     false, true, false]],

	Ishape : [[false, true, false,
				false, true, false,
				false, true, false],

				[false, false, false,
				 true, true, true,
				 false, false, false],

				 [false, true, false,
				false, true, false,
				false, true, false],
				
				[false, false, false,
				 true, true, true,
				 false, false, false]
				 ],
	Lshape : [[false, true, false,
				false, true, false,
				false, true, true],

				[false, false, true,
				true, true, true,
				false, false, false],

				[true, true, false,
				false, true, false,
				false, true, false],

				[false, false, false,
				true, true, true,
				true, false, false]],
};

module.exports = Tile;