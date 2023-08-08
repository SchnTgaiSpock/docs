import { z, defineCollection } from 'astro:content';

const wikiPage = defineCollection({
    schema: z.object({
        title: z.string().optional()
    })
})

export const collections = {
    gastronomicon: wikiPage,
    slimehud: wikiPage,
}