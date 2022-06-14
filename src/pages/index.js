import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Ocampo Murcia</title>
        <meta name="description" content="My Portfolio" />
      </Head>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Hey!</h4>
            <h2>I'm David Ocampo</h2>
            <p>UX Designer based in Jakarta, Indonesia. I am designing with a minimal and beautiful design in mind.</p>
            <div className="d-flex">
              <button type='button'>Mail Me</button>
              <button type='button'>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
