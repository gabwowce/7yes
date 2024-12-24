import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import MenuItem from './MenuItem.jsx';
import ThemeSwitcher from './UI/ThemeSwitcher.jsx';
import IconButton from './UI/IconButton.jsx';

import { UserIcon, MagnifyingGlassIcon, ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState({
    categories: false,
    pages: false,
    account: false,
  });
  
  const [activeMenu, setActiveMenu] = useState('pages');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [activeAccordion, setActiveAccordion] = useState(null); 


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (menu, isOpen) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: isOpen
    }));
  };

  const handleMenuHover = (menu, isHovering) => {
    toggleDropdown(menu, isHovering);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menu) =>{
    setActiveMenu(menu);
  }

  const handleAccordionToggle = (section) => {
    setActiveMenu(section);
    setActiveAccordion(activeAccordion === section ? null : section);
  };


  return (
    <>
    <nav className="container navbar">
      <Logo />

      {/* Menu for larger screens */}

      <ul className={`large-menu ${isMobileMenuOpen ? 'hidden' : 'hidden'}`}>
        <MenuItem 
          label="Categories" 
          menuKey="categories" 
          activeMenu={activeMenu} 
          dropdownOpen={dropdownOpen}
          onMouseEnter={handleMenuHover} 
          onMouseLeave={handleMenuHover} 
          onClick={handleMenuClick} 
          divClass={"drop-list"} 
          itemClass={"drop-list-item"} 
          hasDropdown={true}
        />
        <MenuItem 
          label="Pages" 
          menuKey="pages" 
          activeMenu={activeMenu} 
          dropdownOpen={dropdownOpen}
          onMouseEnter={handleMenuHover} 
          onMouseLeave={handleMenuHover} 
          onClick={handleMenuClick} 
          divClass={"drop-list"} 
          itemClass={"drop-list-item"} 
          hasDropdown={true}
        />
        <MenuItem 
          label="Account" 
          menuKey="account" 
          activeMenu={activeMenu} 
          dropdownOpen={dropdownOpen}
          onMouseEnter={handleMenuHover} 
          onMouseLeave={handleMenuHover} 
          onClick={handleMenuClick} 
          divClass={"drop-list"} 
          itemClass={"drop-list-item"} 
          hasDropdown={true}
        />
         <MenuItem 
          label="Blog" 
          menuKey="blog" 
          activeMenu={activeMenu} 
          dropdownOpen={dropdownOpen}
          onClick={handleMenuClick}    
        />
        <MenuItem 
          label="Reviews" 
          menuKey="reviews" 
          activeMenu={activeMenu} 
          dropdownOpen={dropdownOpen}
          onClick={handleMenuClick}    
        />
      </ul>

      <div className="icons">
        <ThemeSwitcher className="theme-switcher" />
        {/* Search icon*/}
        <IconButton
          icon={<MagnifyingGlassIcon className="bigger-icon" />}
        />
        {/* Account icon*/}
        <IconButton
          icon={<UserIcon className="bigger-icon" />}
        />
        {/* Hamburger icon visible on mobile (lg and below) */}
        <IconButton
          icon={<Bars3Icon className="bigger-icon lg:hidden" />}
          onClick={handleMobileMenuToggle}
        />
       
      </div>
        
    </nav>

    {/* Mobile Menu */}
    <div className='mobile-menu-bg'>
      <div className={`container mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="menu-item">
          <MenuItem
              label="Categories"
              menuKey="categories"
              activeMenu={activeMenu}
              dropdownOpen={dropdownOpen}
              onClick={handleAccordionToggle}
              divClass={"menu-list"}
              itemClass={"menu-item"}
              hasDropdown={true}
              activeAccordion={activeAccordion}
          />
          <MenuItem 
            label="Pages" 
            menuKey="pages" 
            activeMenu={activeMenu} 
            dropdownOpen={dropdownOpen}
            onClick={handleAccordionToggle} 
            divClass={"menu-list"} 
            itemClass={"menu-item"} 
            hasDropdown={true}
            activeAccordion={activeAccordion}
          />
          <MenuItem 
            label="Account" 
            menuKey="account" 
            activeMenu={activeMenu} 
            dropdownOpen={dropdownOpen} 
            onClick={handleAccordionToggle} 
            divClass={"menu-list"} 
            itemClass={"menu-item"} 
            hasDropdown={true}
            activeAccordion={activeAccordion}
          />
          <MenuItem 
            label="Blog" 
            menuKey="blog" 
            activeMenu={activeMenu} 
            dropdownOpen={dropdownOpen}
            onClick={handleMenuClick}    
          />
          <MenuItem 
            label="Reviews" 
            menuKey="reviews" 
            activeMenu={activeMenu} 
            dropdownOpen={dropdownOpen}
            onClick={handleMenuClick}    
          />

            
        </ul>
      </div>
    </div>
    
    </>
    
  );
}

export default Navbar;
