declare interface HiSVGElement extends SVGElement {
  get: (keys: string[]) => string[]
  set: (data: Record<string, any>) => HiSVGElement
}
