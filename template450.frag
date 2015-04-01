#version 450 compatibility

uniform sampler2D tex0;

in vec2 vTexCoord;
out vec4 vFragColor;

void main()
{
	vec3 color = texture(tex0, vTexCoord).rgb;

	vFragColor = vec4(color, 1.0);
}

