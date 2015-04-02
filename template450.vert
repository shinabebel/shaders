#version 450 compatibility

out vec2 vTexCoord;

void main()
{
	gl_FrontColor = gl_Color;
	vTexCoord = gl_Vertex.xy;
	gl_Position = gl_ModelViewProjectionMatrix* gl_Vertex;
}
