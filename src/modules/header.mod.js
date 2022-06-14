export let headerSection = () => {
  let header =
    `
    <header>
      <div class="header-container flex">
        <div class="header-logo flex">
          <a href="index.html">
            <h1>Leaderboard</h1>
          </a>
        </div>
      </div>
    </header> 
    `;
  
  return new DOMParser().parseFromString(header, 'text/html').body.firstChild;
}