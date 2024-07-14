

const Nav = () => {
    return (
        <nav className="flex flex-row justify-between px-5 py-3 items-center">
            {/* logo  */}
            <div>
                <img src="./logo-light.png" className="w-24 h-5" alt="logo" />
            </div>
            {/* navigation links  */}
            <div>
                <ul className="flex gap-4">
                  
                    <li> <a href="#about"></a> About Us</li>
                    <li className="flex">
                        <p>Our Services</p>
                        <select value="Our Services" className="rounded-full text-white bg-transparent border-none">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </li>
                    <li> <a href="#work"></a> Work With Us</li>
                    <li> <a href="#blog"></a> Blog</li>
                </ul>
            </div>
            {/* button  */}
            <div className="flex gap-3">
              <button className="rounded-full p-3 m-0"></button>
            <p>Get In Touch</p>  
            </div>
            

        </nav>
    );
};

export default Nav;