import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function MenuItem({ label, menuKey, activeMenu, dropdownOpen, onMouseEnter = null,
   onMouseLeave = null, onClick, divClass, itemClass, hasDropdown = false, activeAccordion }) {
  return (
    <li
      className="relative"
      onMouseEnter={hasDropdown ? () => onMouseEnter(menuKey, true) : undefined}
      onMouseLeave={hasDropdown ? () => onMouseLeave(menuKey, false) : undefined}
      onClick={() => onClick(menuKey)}
    >
      <a
        href="#"
        className={`menu-item flex items-center ${activeMenu === menuKey ? 'active' : ''}`}
      >
        {label}
        {hasDropdown && <ChevronDownIcon className="arrow-icon" />}
      </a>
      {hasDropdown && dropdownOpen[menuKey] && (
        <div className={divClass}>
          <ul>
            <li><a href="#" className={itemClass}>Option 1</a></li>
            <li><a href="#" className={itemClass}>Option 2</a></li>
            <li><a href="#" className={itemClass}>Option 3</a></li>
          </ul>
        </div>
      )}
      {activeAccordion === menuKey &&(
            <div className={divClass}>
                <ul>
                    <li><a href="#" className={itemClass}>Option 1</a></li>
                    <li><a href="#" className={itemClass}>Option 2</a></li>
                    <li><a href="#" className={itemClass}>Option 3</a></li>
                </ul>
            </div>
        )}
    </li>
  );
}

