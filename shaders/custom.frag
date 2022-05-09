#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 temp = texture(image, texcoord);
    FragColor = vec4(0.5 - temp.r, temp.g, 0.75 - temp.b, 1.0);
}
