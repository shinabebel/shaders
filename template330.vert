#version 330

smooth out vec2 vTexCoord;

void main(void) 
{
	// Pass through the texture coordinates
	vTexCoord = gl_MultiTexCoord0.st;
	
	gl_Position = ftransform();

}
