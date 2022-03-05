import React, {useState} from 'react';

//images
import LogoIcon from '../../images/logoIcon.png';
import LogoText from '../../images/logoText.png';
import MenuNav from '../../images/menu.svg';
//components
import MenuModal from '../MenuModal/MenuModal';

const Header: React.FC = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpenModal(true);
    }

    return (
        <div>
           <div className="
                flex sm:justify-between items-center
                sm:py-10 sm:px-[20px] 
                md:px-[50px] 
                lg:px-[88px] 
                xl:px-bothsides
                2xl:px-0 2xl:justify-center
                2xl:mx-auto"
            >
                <div className="my-[30px] ml-[18px] mr-10 sm:hidden">
                    <img src={MenuNav} alt="menu-nav" onClick={handleOpen}/>
                </div>
                <div className="flex 2xl:mr-[288px]">
                    <img className="w-[45px] h-7 lg:w-[56px] lg:h-[34px] mr-3" src={LogoIcon} alt='logo-icon'/>
                    <img className="w-[106px] h-8 lg:w-[167px] lg:h-[38px]" src={LogoText} alt='logo-text'/>
                </div>
                <nav className="hidden sm:block">
                    <ul className="flex">
                        <li>
                            <a className="sm:ml-5 md:ml-7 lg:ml-[48px] xl:ml-[86px]" href="#">About us</a>
                        </li>
                        <li>
                            <a className="sm:ml-5 md:ml-7 lg:ml-[48px] xl:ml-[86px]" href="#">Promotion</a>
                        </li>
                        <li>
                            <a className="sm:ml-5 md:ml-7 lg:ml-[48px] xl:ml-[86px]" href="#">Shop</a>
                        </li>
                        <li>
                            <a className="sm:ml-5 md:ml-7 lg:ml-[48px] xl:ml-[86px]" href="#">Contacts</a>
                        </li>
                        <li>
                            <a 
                                className="
                                    sm:ml-[12px] sm:py-[14px] sm:px-2 
                                    md:px-4 
                                    lg:ml-[18px] lg:py-[14px] lg:px-8 
                                    xl:ml-[58px]
                                    bg-primaryGreen shadow-shadowBtn rounded-[7px] text-white" 
                                href="#"
                            >
                                    Contact us
                            </a>
                        </li>
                    </ul>
                </nav>  
            </div>

            {isOpenModal && <MenuModal setIsOpenModal={setIsOpenModal}/>}
        </div>
    )
}

export default Header;