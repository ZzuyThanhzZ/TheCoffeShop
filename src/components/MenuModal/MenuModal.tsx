import React from 'react';

//images
import Logo from '../../images/logo.png';
import CloseBtn from '../../images/closeBtn.svg';
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import Twitter from '../../images/twitter.png';

interface Props {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal: React.FC<Props> = ({setIsOpenModal}) => {

    const handleClose = () => {
        setIsOpenModal(false);
    }

    return (
        <div className="fixed inset-0 bg-white z-10 animate-showIn">
           <div className="flex px-[30px]">
                <img className="my-[50px] mx-auto" src={Logo} alt="Logo" />
                <div className="flex items-center">
                    <img src={CloseBtn} alt="close" onClick={handleClose}/>
                </div>
           </div>
           <div className="text-4xl py-10 text-center">
                <div className="font-bold">
                    <a href="#">Home</a>
                </div>
                <div className="my-[70px]">
                    <a href="#">About us</a>
                </div>
                <div>
                    <a href="#">Promotion</a>
                </div>
                <div className="my-[70px]">
                    <a href="#">Shop</a>
                </div>
                <div>
                    <a href="#">Contacts</a>
                </div>
           </div>

           <div className="flex justify-center mt-[50px] pb-5">
                <img src={Instagram} alt="Instagram-icon" />
                <img className="mx-7" src={Facebook} alt="Facebook-icon" />
                <img src={Twitter} alt="Twitter-icon" />
           </div>
           <div className="fixed bottom-[2px] flex justify-center w-full">
                <div className="bg-black w-[134px] h-[5px] rounded-xl"></div>
           </div>
        </div>
    )
}

export default MenuModal;