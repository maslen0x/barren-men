import slugify from 'slugify'

export const slug = (str: string) => slugify(str, {
  replacement: '.',
  lower: true
})