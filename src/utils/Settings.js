import { useEffect, useState } from "react";
import { getColors } from "./Colors";

const getThemeSettings = () => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState('');
  const [bgColor, setBGColor] = useState('');
  const colors = getColors();

  useEffect(() => {
    if(isDark) {
      setTheme('dark');
      setBGColor(colors.boston_blue);
    }
  });

  return { theme, bgColor }
}

const getHomeSettings = () => {
  const [hasLandingPage, setHasLandingPage] = useState(false);
  return { hasLandingPage };
}

const getLandingPageSettings = () => {
  const [isUsingSlider, setIsUsingSlider] = useState(false);
  return { isUsingSlider };
}

const getHeroSectionSettings = () => {
  const [style, setStyle] = useState('leftImage');
  return { style };
}

export { getHeroSectionSettings, getHomeSettings, getLandingPageSettings, getThemeSettings };