const esbuild = require('esbuild');
esbuild.build({
  bundle: true,
  entryPoints: {
    a: './main.js'
  },
  sourcemap: false,
  minify: false,
  write: false, 
  sourcesContent: false,
}).then(res => {
  console.log(res.outputFiles[0].text.toString('utf-8'))
  console.log('\n')
  eval(res.outputFiles[0].text.toString('utf-8'))
})
