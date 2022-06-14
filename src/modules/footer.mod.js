export let footerSection = () => {
  let footer =
    `
    <footer class="position-absolute bottom-0 width-100">
      <div class="footer-container flex flex-justify-center">
        <p>Microverse Inter-Cohorts Football League Leaderboard</p>
      </div>
    </footer>
    `;

  return new DOMParser().parseFromString(footer, 'text/html').body.firstChild;
}
