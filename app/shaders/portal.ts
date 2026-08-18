/**
 * The portal's GLSL, kept in one place on purpose.
 *
 * ShaderField compiles this; ShaderSource shows it to the visitor as the
 * site's own proof of work. Both import the same strings, so the code on
 * screen is always the code that ran — a panel displaying a stale copy would
 * be theatre, and theatre is what this rebuild removed.
 */

export const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

export const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_intensity;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

float band(float v, float c, float w) { return smoothstep(w, 0.0, abs(v - c)); }

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res.xy) / u_res.y;
  float t = u_time * 0.055;
  vec2 m = (u_mouse - 0.5) * 0.7;

  vec2 q = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p * 1.9 + 3.0 * q + vec2(1.7, 9.2) + m),
                fbm(p * 1.9 + 3.0 * q + vec2(8.3, 2.8) - m));
  float f = fbm(p * 1.7 + 3.4 * r);

  vec3 VOID_C  = vec3(0.043, 0.024, 0.125);
  vec3 ABYSS   = vec3(0.078, 0.047, 0.200);
  vec3 ECHO    = vec3(0.165, 0.129, 0.322);
  vec3 GLIMMER = vec3(0.357, 0.302, 0.604);
  vec3 MIST_C  = vec3(0.557, 0.525, 0.718);
  vec3 INC     = vec3(1.000, 0.416, 0.533);

  // Structure concentrates away from the reading column: the left stays calm
  // so type sits on quiet ground, the right carries the field. This is the
  // reference's own composition, not a compromise.
  float side = smoothstep(-0.30, 0.85, p.x);
  float act = 0.10 + 0.90 * side;

  vec3 col = mix(VOID_C, ABYSS, smoothstep(0.30, 0.90, f) * 0.65);
  col = mix(col, ECHO, smoothstep(0.58, 1.00, f) * 0.50 * act);

  // Broad light, kept low so it never becomes a wash.
  float glow = pow(smoothstep(0.62, 1.0, f), 3.0);
  col += mix(ECHO, GLIMMER, glow) * glow * 0.34 * act;

  // Fine filaments. Narrow on purpose — these read as drawn light, and a wide
  // band turns the field into marble.
  col += GLIMMER * band(f, 0.640, 0.0150) * 0.42 * act;
  col += MIST_C  * band(f, 0.712, 0.0075) * 0.52 * act;
  col += INC     * band(f, 0.758, 0.0040) * 0.70 * act * u_intensity;

  // Vector mesh material.
  vec2 g = (p + r * 0.35) * 9.0;
  vec2 gr = abs(fract(g) - 0.5);
  float line = 1.0 - smoothstep(0.0, 0.05, min(gr.x, gr.y));
  col += GLIMMER * line * 0.035 * smoothstep(0.45, 0.95, f) * act;

  float vig = smoothstep(1.85, 0.10, length(p * vec2(0.78, 1.0)));
  col = mix(VOID_C, col, 0.35 + 0.65 * vig);

  gl_FragColor = vec4(col, 1.0);
}
`
