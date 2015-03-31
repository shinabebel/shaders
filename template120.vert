#version 120
  
varying vec2 vTexCoord;

void main(void)
{
	vTexCoord = gl_MultiTexCoord0.st;
	gl_Position = ftransform();
}
