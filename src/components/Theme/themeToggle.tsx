
import Toggle from 'react-toggle';
import "react-toggle/style.css" 
import { useColorScheme } from './themeContext';

const ThemeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();
  return (
    <div className="toggle-container">
     
      <Toggle
        checked={isDark}
        onChange={(event:any) => setIsDark(event.target.checked)}
        icons={{ checked: '🌙', unchecked: '🔆' }}
        // aria-label="Dark mode"
      />
      
    </div>
  );
};
export default ThemeToggle;
