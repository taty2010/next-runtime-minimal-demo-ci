export default function Home() {
  return (
    <>
      <h1>Testing Next 13.5.2</h1>
      <ul>
        <li><a href="/server-components">Server Component</a></li>
        <ul>
          <li><a href="/server-components/static-fetch">Static Fetch 1</a></li>
          <li><a href="/server-components/static-fetch-2">Static Fetch 2</a></li>
          <li><a href="/server-components/static-fetch-3">Static Fetch 3</a></li>
          <li><a href="/server-components/revalidate-fetch">Revalidate Fetch</a></li>
          <li><a href="/server-components/dynamic-fetch">Dynamic Fetch</a></li>
          <li><a href="/server-components/dynamic-functions">Dynamic Functions</a></li>
          <li><a href="/server-components/static-fetch-dynamic">Force Dynamic Fetch</a></li>
        </ul>
      </ul>
      <ul>
        <li><a href="/posts">Dynamic Route</a></li>
        <ul>
          <li><a href="/posts/1">Static 1</a></li>
          <li><a href="/posts/2">Static 2</a></li>
          <li><a href="/posts/3">Static 3</a></li>
          <li><a href="/posts/static-fetch/1">Static Fetch 1</a></li>
          <li><a href="/posts/static-fetch/2">Static Fetch 2</a></li>
          <li><a href="/posts/static-fetch/3">Static Fetch 3</a></li>
          <li><a href="/posts/static-fetch-catch-all/a/1">Static Fetch Catch-All 1</a></li>
          <li><a href="/posts/static-fetch-catch-all/a/2">Static Fetch Catch-All 2</a></li>
          <li><a href="/posts/static-fetch-catch-all/b/1">Static Fetch Catch-All 3</a></li>
          <li><a href="/posts/static-fetch-catch-all/b/2">Static Fetch Catch-All 4</a></li>
          <li><a href="/posts/static-fetch-catch-all">Static Fetch Optional Catch-All 1</a></li>
          <li><a href="/posts/static-fetch-catch-all/a/1">Static Fetch Optional Catch-All 2</a></li>
          <li><a href="/posts/static-fetch-catch-all/a/2">Static Fetch Optional Catch-All 3</a></li>
          <li><a href="/posts/static-fetch-catch-all/b/1">Static Fetch Optional Catch-All 4</a></li>
          <li><a href="/posts/static-fetch-catch-all/b/2">Static Fetch Optional Catch-All 5</a></li>
          <li><a href="/posts/revalidate-fetch/1">Revalidate Fetch 1</a></li>
          <li><a href="/posts/revalidate-fetch/2">Revalidate Fetch 2</a></li>
          <li><a href="/posts/revalidate-fetch/3">Revalidate Fetch 3</a></li>
          <li><a href="/posts/dynamic-fetch/1">Dynamic Fetch 1</a></li>
          <li><a href="/posts/dynamic-fetch/2">Dynamic Fetch 2</a></li>
          <li><a href="/posts/dynamic-fetch/3">Dynamic Fetch 3</a></li>
          <li><a href="/posts/dynamic-functions/1">Dynamic Functions 1</a></li>
          <li><a href="/posts/dynamic-functions/2">Dynamic Functions 2</a></li>
          <li><a href="/posts/dynamic-functions/3">Dynamic Functions 3</a></li>
        </ul>
      </ul>
      <ul>
        <li><a href="/client-components">Client Component</a></li>
        <ul>
          <li><a href="/client-components/static-fetch">Static Fetch</a></li>
          <li><a href="/client-components/revalidate-fetch">Revalidate Fetch</a></li>
          <li><a href="/client-components/dynamic-fetch">Dynamic Fetch</a></li>
          <li><a href="/client-components/dynamic-functions">Dynamic Functions</a></li>
        </ul>
      </ul>
      <ul>
        <li><a href="/links">Next Links</a></li>
      </ul>
      <ul>
        <li>Route Handlers</li>
        <ul>
          <li><a href="/api/static-handler">Static Handler</a></li>
          <li><a href="/api/dynamic-handler">Dynamic Handler</a></li>
          <li><a href="/api/dynamic-segments/1">Dynamic Segments 1</a></li>
          <li><a href="/api/dynamic-segments/2">Dynamic Segments 2</a></li>
          <li><a href="/api/revalidate-handler">Revalidate Handler</a></li>
          <li><a href="/api/streaming-handler">Streaming Handler</a></li>
          <li><a href="/api/draft-mode/on">Draft Mode On</a></li>
          <li><a href="/api/draft-mode/off">Draft Mode Off</a></li>
          <li><a href="/api/on-demand-revalidate/path">On-Demand Revalidate Path</a></li>
          <li><a href="/api/on-demand-revalidate/tag">On-Demand Revalidate Tag</a></li>
        </ul>
      </ul>
    </>
  )
}
