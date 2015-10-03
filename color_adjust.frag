vec3 adjustHue(vec3 c, float inputMax)
{
	vec3 color = rgb2hsv(c);
	float H = color.x + inputMax;
	while (H < 0) H += 1;
	while (H > 1) H -= 1;
	return hsv2rgb(vec3(H, color.y, color.z));
}

vec3 adjustSaturation(vec3 c, float inputMax)
{
	vec3 color = rgb2hsv(c);
	float S = clamp(color.y*inputMax, 0.0, 1.0);
	return hsv2rgb(vec3(color.x, S, color.z));
}

vec3 adjustValue(vec3 c, float inputMax)
{
	vec3 color = rgb2hsv(c);
	float V = clamp(color.z*inputMax, 0.0, 1.0);
	return hsv2rgb(vec3(color.x, color.y, V));
}



uniform sampler2D scene;
uniform sampler2D bloomBlur;
uniform float gamma = 2.2;
uniform float exposure = 1.0;

void main()
{
    vec3 hdrColor = texture(scene, TexCoords).rgb;      
    vec3 bloomColor = texture(bloomBlur, TexCoords).rgb;
    hdrColor += bloomColor; // additive blending
    // tone mapping
    vec3 result = vec3(1.0) - exp(-hdrColor * exposure);
    // also gamma correct while we're at it       
    result = pow(result, vec3(1.0 / gamma));
    FragColor = vec4(result, 1.0f);
}