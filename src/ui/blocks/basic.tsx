import alinea from 'alinea'

export const BasicBlock = alinea.type('Block', {
    fullWidth: alinea.check('Full width'),
    background: alinea.select('Background', {
        'white': 'White',
        'green': 'Green',
        'blue': 'Blue'
    }),
  });