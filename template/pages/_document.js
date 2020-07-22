import Document, { Html, Head, Main, NextScript } from 'next/document'

console.log('SABEEEE') 

class MyDocument extends Document {
  render() {
    return (
      <Html asd-2="1" data-wf-page="5da0657b754316708647c5a7" data-wf-site="5da0657b754316944047c5a6">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
} 

export default MyDocument