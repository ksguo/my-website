const Footer = () => {
    return (
      <footer className="py-4 bg-uk-background-primary-light text-black">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex justify-center items-center">
            <p className="text-sm font-primary text-uk-label-secondary-light">
              © {new Date().getFullYear()} Kesheng. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer