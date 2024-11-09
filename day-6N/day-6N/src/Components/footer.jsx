const Footer = () => {
    return (
      <>
        {/* <!-- Footer -->*/}
        <footer
          className="text-center text-lg-start bg-light text-muted"
          style={{ marginTop: "40vh" }}
        >
          {/* <!-- Copyright -->*/}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2024 Copyright :
            <br />
            <a
              className="text-reset fw-bold"
              href="https://url-shortner-fe-blush.vercel.app"
            >
              Anbumani (URL Shortner)
            </a>
          </div>
          {/* <!-- Copyright -->*/}
        </footer>
        {/* <!-- Footer -->*/}
      </>
    );
  };
  
  export default Footer;