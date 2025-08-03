function Footer() {
  return (
    <div className="w-full flex flex-col space-y-4 py-2 px-6 bg-rose-100">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 my-3 gap-4">
        <div>
          <p className="font-bold text-lg">PSDA</p>
          <p>
            Empowering children and youth to create positive change in their
            communities through education, collaboration, and meaningful
            projects
          </p>
        </div>
        <div>
          <p className="font-bold text-lg">Quick Link</p>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Our Projects</li>
            <li>Join us</li>
            <li>About us</li>
            <li>Support us</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg">Contact</p>
          <ul className="space-y-1">
            <li>info@psda.org</li>
            <li>+255 784 584 231</li>
            <li>123 Morogoro Manzese</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg">Follow us</p>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Our Projects</li>
            <li>Join us</li>
            <li>About us</li>
            <li>Support us</li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-300"></hr>
      <div className="flex justify-between items-center">
        <div> PSDA Community. All rights reserved</div>
        <div>Privacy policy Term of service</div>
      </div>
    </div>
  );
}

export default Footer;
