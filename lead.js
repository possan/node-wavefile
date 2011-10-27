var WaveFile = require('./wavefile').WaveFile;

var samplerate = 44100;

var f = new WaveFile( "lead.wav", samplerate, 2 );

var M = Math.PI / (samplerate / 2.0);
var p = 0;
var b = 110;

var cj = samplerate * 2.5;

for( var j=0; j<5 * samplerate; j++ ){

	var o1 = 0.5 * Math.sin( p * 1*b * M );
	var o2 = 0.5 * Math.sin( p * 5*b/8 * M );
	var o3 = 0.5 * Math.cos( p * 3*b/4 * 0.002 * M );
	var o4 = 0.5 * Math.cos( p * 2*b * 0.001 * M );
	var o5 = 0.5 * Math.sin( p * 3*b/5 * M );
	var o6 = 0.5 * Math.cos( p * 3*b * M );
		
	var a = 1.0 - Math.abs((j - cj) / cj);
		
	f.write( (o1+o2*o3) * a );
	f.write( (o4+o5*o6) * a );

	p ++;
}

f.close();