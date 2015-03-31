float map(float value, float inputMin, float inputMax, float outputMin, float outputMax)
{
	value = clamp(value, inputMin, inputMax);
	float outVal = ((value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin);
	return outVal;
}

vec3 vec3map(vec3 value, float inputMin, float inputMax, float outputMin, float outputMax)
{
	float R = map(value.r, inputMin, inputMax, outputMin, outputMax);
	float G = map(value.g, inputMin, inputMax, outputMin, outputMax);
	float B = map(value.b, inputMin, inputMax, outputMin, outputMax);
	return vec3(R, G, B);
}