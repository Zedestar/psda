function Footer() {
  return (
    <div className="w-full p-2">
      <div>
        <div></div>
        <div>
          <p className="font-bold text-lg">Quick Link</p>
          <ul>
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
