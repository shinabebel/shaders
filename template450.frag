#version 450 compatibility

uniform sampler2DRect tex0;

in vec2 vTexCoord;
out vec4 vFragColor;

void main()
{
	vec3 color = textureRect(tex0, vTexCoord).rgb;

	vFragColor = vec4(color, 1.0);
}

