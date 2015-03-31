#version 120
#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect tex0;
uniform int sub;

varying vec2 vTexCoord;

void main(void){
	//const int sub = 15;
	
	vec3 color = texture(tex0, vTexCoord).rgb;
	
    gl_FragColor = vec4(color, 1.0);
}
