#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 temp = texture(image, texcoord);
    float red = (floor((temp.x * 4.0) + .5)) / 4.0;
    float green = (floor((temp.y * 4.0) + .5)) / 4.0;
    float blue = (floor((temp.z * 4.0) + .5)) / 4.0;
    FragColor = vec4(red, green, blue, 1.0);
}

