const MODERN = "MODERN"
export class Style {
  static toString(style: string): string {
    return style.toUpperCase() === MODERN ? "Moderno" : "Tradicional"
  }
}
