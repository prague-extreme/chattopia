import Link from 'next/link'

function Nodata() {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
      </head>
      <body />
      <div class="mainbox">
        <div class="err">404</div>
        <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go
          <Link href="/">
            <a>home</a>
          </Link>
          and try from there.</p></div>
      </div>
    </div>
  )
}

export default Nodata
