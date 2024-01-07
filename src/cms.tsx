import alinea, {createNextCMS} from 'alinea'
import { BannerBlock } from './ui/blocks/banner';

export const TextBlock = alinea.type('Text', {
  title: alinea.text('Title'),
  text: alinea.richText('Text'),
  background: alinea.select('Background', {
      'white': 'White',
      'green': 'Green',
      'blue': 'Blue'
  })
});

export const Image =  alinea.object('Image', {
  fields: alinea.type('Image Fields', {
    src: alinea.image('Image'),
    position: alinea.select('Position', {
      'left': 'Left',
      'right': 'Right',
      'center': 'Center'
    })
  })
})


export const Page = alinea.type('Page', {
  title: alinea.text('Title'),
  slug: alinea.text('Slug'),
  blocks: alinea.list('Blocks', {
    schema: alinea.schema({
      Banner: BannerBlock,
      TextBlock: TextBlock
    })
  })
})

export const cms = createNextCMS({
  schema: {
    Page
  },
  workspaces: {
    main: alinea.workspace('RAST', {
      pages: alinea.root('RAST', {
        welcome: alinea.page(
          Page({
            title: 'Welcome'
          })
        ),
        [alinea.meta]: {
          contains: ['Page']
        }
      }),
      media: alinea.media(),
      [alinea.meta]: {
        source: 'src/content',
        mediaDir: 'public'
      }
    })
  }
})
