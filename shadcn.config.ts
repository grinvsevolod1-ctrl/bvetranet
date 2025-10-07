// shadcn.config.ts
export const config = {
  $schema: "https://ui.shadcn.com/schema.json",
  style: "new-york",
  tailwind: {
    config: "tailwind.config.ts",
    css: "src/styles/globals.css",
    baseColor: "zinc",
    cssVariables: true
  },
  aliases: {
    components: "@/components",
    utils: "@/lib/utils"
  }
}
