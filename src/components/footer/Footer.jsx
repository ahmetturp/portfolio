function Footer() {
  return (
    <>
      <section>
        <footer className="footer has-background-grey-dark has-text-grey-lighter">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <span>
                  <a href="https://bulma.io" target="_blank">
                    <img
                      src="https://bulma.io/assets/images/made-with-bulma.png"
                      alt="Made with Bulma"
                      width="128"
                      height="24"
                    />
                  </a>
                </span>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p>Copyright © {new Date().getFullYear()} AHMET TURP</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <div className="columns is-size-4">
                  <div className="column">
                    <span className="icon ml-3 mr-3">
                      <a href="https://github.com/ahmetturp/" target="_blank">
                        <i className="fa-brands fa-github has-text-grey-lighter"></i>
                      </a>
                    </span>
                    <span className="icon ml-3 mr-3">
                      <a
                        href="https://www.linkedin.com/in/ahmetturp/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin has-text-grey-lighter"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </footer>
      </section>
    </>
  );
}

export default Footer;
