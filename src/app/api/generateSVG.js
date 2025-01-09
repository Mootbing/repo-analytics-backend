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
    totalLines,
    textColor,
    ...props
  }) {
    // Generate the SVG as a string
    return `
      <svg width="467" height="195" xmlns="http://www.w3.org/2000/svg">
        <rect width="467" height="195" fill="${backgroundColor}" />
        <title>${title}</title>
        <desc></desc>
        <g>
          <text x="20" y="35" font-size="20" font-weight="300" fill="${titleColor}">${title}</text>
          <text x="20" y="60" font-size="14" fill="${textColor}" font-weight="500">Files: ${numFiles}</text>
          <text x="${60 + numFiles.length * 7.5}" y="60" font-size="14" fill="${textColor}" font-weight="500">
            Total Lines: ${totalLines}
          </text>
        </g>
      </svg>
    `;
  }
  