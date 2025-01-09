export function beautifyNumberString(num) {
    num = parseInt(num);
  
    //return k, m, b, t, etc
    if (num > 999999999) {
      return (num / 1000000000).toFixed(1) + "b";
    } else if (num > 999999) {
      return (num / 1000000).toFixed(1) + "m";
    } else if (num > 999) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  }

export function generateSVG({
    backgroundColor,
    title,
    titleColor,
    numFiles,
    numErrors,
    totalLines,
    textColor,
    ...props
  }) {
    // Generate the SVG as a string
    return `
      <svg width="467" height="195" xmlns="http://www.w3.org/2000/svg">
        <rect width="467" height="195" fill="${backgroundColor}" />
        <title>${title}</title>
        <desc>Repository Analyzer</desc>
        <g>
          <text x="20" y="35" style="font-size: 24px; font-weight: 500; fill: ${titleColor};">${title}</text>
          <text x="20" y="60" style="font-size: 14px; fill: ${textColor}; font-weight: 500;">
            ${numFiles} Files | ${totalLines} Lines | ${numErrors} Unanalyzed
          </text>

          <text x="20" y="90" style="font-size: 16px; font-weight: 500; fill: ${titleColor};">Languages Breakdown</text>
          <text x="20" y="130" style="font-size: 16px; font-weight: 500; fill: ${titleColor};">Files</text>
        </g>
      </svg>
    `;
  }