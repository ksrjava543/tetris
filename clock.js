var clock = function() {
	this.clockSpeed = null;
	this.startClock = function(){
		
			this.clockSpeed = 1
	}
	this.getSpeed = function() {
			return this.clockSpeed;
	}
	this.incSpeed = function (increment){
			this.clockSpeed += increment;
	}
	
};
module.exports = clock;