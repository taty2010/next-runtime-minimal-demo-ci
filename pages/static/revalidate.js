const Show = ({ show, time }) => (
  <div>
    <h1>hellooooo</h1>
    <div>
      <p>making update to see here </p>
      <p>New paragraph here for pull request </p>
      <hr />
      <h1>Show #{show.id}</h1>
      <p>{show.name}</p>
    </div>
  </div>
)

export async function getStaticProps(context) {
  const res = await fetch(`https://tvproxy.netlify.app/shows/71`)
  const data = await res.json()

  return {
    props: {
      show: data,
      time: new Date().toISOString(),
    },
  }
}

export default Show
