#version 450 compatibility

uniform mat4 modelViewProjectionMatrix;
uniform mat4 textureMatrix;

in vec4 position;
in vec2 texcoord;

out vec2 vTexCoord;

void main()
{
    vTexCoord = texcoord;
	gl_Position = modelViewProjectionMatrix * position;
}
