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
    subHeader,
    title,
    titleColor,
    numFiles,
    numErrors,
    totalLines,
    textColor,
    extensions,
    lineCounterPerFile,
    fileCounter,
    ...props
  }) {

    const height = 300 //100 + (extensions.length * 20) + 20;

    // Generate the SVG as a string
    return `
      <svg width="467" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="467" height="${height}" fill="${backgroundColor}" />
        <title>${title}</title>
        <desc>Repository Analyzer</desc>
        <g>
          <text x="20" y="25" style="font-size: 12px; font-weight: 500; fill: ${textColor};">${subHeader}</text>
          <text x="20" y="50" style="font-size: 24px; font-weight: 500; fill: ${titleColor};">${title}</text>
          <text x="20" y="70" style="font-size: 14px; fill: ${textColor}; font-weight: 500;">
            ${numFiles} Files | ${totalLines} Lines | ${numErrors} Unanalyzed
          </text>

          <text x="20" y="100" style="font-size: 16px; font-weight: 500; fill: ${titleColor};">Languages</text>
          <text x="120" y="100" style="font-size: 16px; font-weight: 500; fill: ${titleColor};">Lines</text>
          <text x="200" y="100" style="font-size: 16px; font-weight: 500; fill: ${titleColor};">Files</text>
          ${extensions.map((ext, index) => `
            <text x="20" y="${120 + (index * 20)}" style="font-size: 12px; fill: ${textColor}; font-weight: 500;">
              .${ext}
            </text>
            `).join("")}

          ${lineCounterPerFile.map((lineCounter, index) => `
            <text x="120" y="${120 + (index * 20)}" style="font-size: 12px; fill: ${textColor}; font-weight: 500;">
              ${lineCounter}
            </text>
            `).join("")}

          ${fileCounter.map((lineCounter, index) => `
            <text x="200" y="${120 + (index * 20)}" style="font-size: 12px; fill: ${textColor}; font-weight: 500;">
              ${lineCounter}
            </text>
            `).join("")}
        </g>
      </svg>
    `;
  }