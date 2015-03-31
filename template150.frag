#version 150 compatibility
#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect tex0;

in vec2 vTexCoord;

void main(void){
	vec3 color = texture(tex0, vTexCoord).rgb;
	
    gl_FragColor = vec4(color, 1.0);
}
