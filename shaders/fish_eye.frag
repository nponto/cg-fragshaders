#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 newtex = (texcoord * 2.0) - 1.0;
    float theta = atan(newtex.y, newtex.x);
    float radius = pow(length(newtex), 1.5);
    newtex = vec2((radius * cos(theta)), (radius * sin(theta)));
    newtex = (newtex + 1.0) * 0.5;
    FragColor = texture(image, newtex);
}
