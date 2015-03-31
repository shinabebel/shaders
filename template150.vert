#version 150 compatibility
  
out vec2 vTexCoord;

void main(void)
{
	vTexCoord = gl_MultiTexCoord0.st;
	gl_Position = ftransform();
}