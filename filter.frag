float gaussian(float x, float y, float sigma)
{
	float r = sqrt(float(x*x + y*y));
	float s = 2.0 * pow(sigma, 2);
	return (exp(-(r*r)/s)) / (3.14159 * s);
}

vec4 filterGaussianBlur(int sub)
{
	int size = int(clamp(sub, 1, 15));
	float sum = 0.0;
	vec4 sampler = vec4(0);
	for (int x=-size; x<size; x++) {
		for (int y=-size; y<size; y++) {
			float scale = gaussian(x, y, 5.0);
			sampler += scale * texture(tex0, vTexCoord + vec2(x, y));
			sum += scale;
		}
	}
	sampler /= sum;
	return sampler;
}

vec3 filterGaussianUnsharp(int sub)
{
	int size = int(clamp(sub, 1, 150));
	float sum = 0.0;
	vec3 sampler = vec3(0);
	for (int x=-size; x<size; x++) {
		for (int y=-size; y<size; y++) {
			float scale = gaussian(x, y, 5.0);
			sampler += scale * texture(tex0, vTexCoord + vec2(x, y)).rgb;
			sum += scale;
		}
	}
	sampler -= (sum + 1.0) * texture(tex0, vTexCoord).rgb;
	sampler *= -1.0;
	return sampler;
}

vec4 filterBoxBlur(int sub)
{
	int size = int(clamp(sub, 1, 15)) * 2 - 1;
	vec3 sampler = vec3(0);
	float samplerAlpha = 0.0;
	for (int i=0; i<size; i++) {
		for (int j=0; j<size; j++) {
			vec2 offset = vec2(i - sub, j - sub);
			sampler += texture(tex0, vTexCoord + offset).rgb;
			samplerAlpha += texture(tex0, vTexCoord + offset).a;
		}
	}
	sampler /= size*size;
	samplerAlpha /= size*size;
	return vec4(sampler, samplerAlpha);
}

vec3 filterSepia()
{
	float grey = dot(texture(tex0, vTexCoord).rgb, vec3(0.299, 0.587, 0.114));
	return grey * vec3(1.2, 1.0, 0.8);
}

vec3 filterEdge(int sub)
{
	int size = int(clamp(sub, 1, 15)) * 2 - 1;
	vec3 sampler = vec3(0);
	for (int i=0; i<size; i++) {
		for (int j=0; j<size; j++) {
			vec2 offset = vec2(i - sub, j - sub);
			sampler -= texture(tex0, vTexCoord + offset).rgb;
		}
	}
	sampler += texture(tex0, vTexCoord).rgb * (size*size+1);
	return sampler;
}

vec4 filterDilate(int sub)
{
	int size = int(clamp(sub, 1, 15));
	vec4 sampler = vec4(0);
	for (int x=-size; x<size; x++) {
		for (int y=-size; y<size; y++) {
			sampler = max(texture(tex0, vTexCoord + vec2(x, y)), sampler);
		}
	}
	return sampler;
}

vec4 filterErode(int sub)
{
	int size = int(clamp(sub, 1, 15));
	vec4 sampler = vec4(1);
	for (int x=-size; x<size; x++) {
		for (int y=-size; y<size; y++) {
			sampler = max(texture(tex0, vTexCoord + vec2(x, y)), sampler);
		}
	}
	return sampler;
}

