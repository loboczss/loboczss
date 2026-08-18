import { reactive } from '#imports'

/**
 * Live readings from the field that is painting the page right now.
 *
 * Every value here is measured, never decorative: the source panel shows them
 * beside the GLSL that consumes them, so a visitor can move the mouse and
 * watch `u_mouse` change in the code that is producing what they are looking
 * at. Nothing in this object is allowed to be invented — if a reading cannot
 * be taken, it stays null and renders as such.
 */
export interface ShaderState {
  running: boolean
  /** Seconds since the first frame — the shader's own `u_time`. */
  time: number
  /** Normalised pointer, exactly as the uniform receives it. */
  mouseX: number
  mouseY: number
  /** Drawing-buffer size in device pixels. */
  width: number
  height: number
  /** Resolution scale, lowered automatically when frames run long. */
  scale: number
  /** Rolling frames per second. */
  fps: number
  /** Whatever the driver reports, or null when it refuses to say. */
  renderer: string | null
}

const state = reactive<ShaderState>({
  running: false,
  time: 0,
  mouseX: 0.5,
  mouseY: 0.5,
  width: 0,
  height: 0,
  scale: 1,
  fps: 0,
  renderer: null,
})

export const useShaderState = () => state
