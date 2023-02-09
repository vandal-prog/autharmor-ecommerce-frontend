import {BsGift, BsHouse} from 'react-icons/bs'; 
import {FiUser} from 'react-icons/fi';
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaLinkedinIn, FaHome, FaStore, FaBriefcase, FaUser } from 'react-icons/fa';
import { AiFillShop } from 'react-icons/ai';
import Logo from '../../assets/images/logo.png';
import './footer.css'

export const FooterComp = () => {

    return(
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                  <liShoes</li>
                  <li>Bags</li>
                  <li>Belts</li>
                  <li>Shirts</li>
                  <li>Suits</li>
         
                </ul>
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Contribute</li>
                  <li>Privacy Policy</li>
                 
                </ul>
              </div>
            </div>
            {/* <hr/> */}
          </div>
    </footer>

    );

}
