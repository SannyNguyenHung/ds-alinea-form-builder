import alinea, {createNextCMS} from 'alinea'

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

export const BasicBlock = alinea.type('Block', {
  fullWidth: alinea.check('Full width'),
  background: alinea.select('Background', {
      'white': 'White',
      'green': 'Green',
      'blue': 'Blue'
  }),
});

export const BannerBlock = alinea.type('🚩 Banner', {
  ...BasicBlock,
  content: alinea.richText('Text'),
});

export const Page = alinea.type('Page', {
  title: alinea.text('Title'),
  path: alinea.path('Path'),
  content: alinea.list('Content', {
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
    main: alinea.workspace('Example', {
      pages: alinea.root('Example project', {
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
