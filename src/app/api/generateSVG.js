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
    const height = 100 + (extensions.length * 20) + 20;

    return `
      <svg width="467" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;display=swap');
            text { font-family: 'Inter', sans-serif; }
          </style>
        </defs>
        <rect width="467" height="${height}" fill="${backgroundColor}" />
        <title>${title}</title>
        <desc>Repository Analyzer</desc>
        <g>
          <text x="20" y="25" style="font-size: 12px; font-weight: 400; fill: ${textColor}; opacity: 0.8;">${subHeader}</text>
          <text x="20" y="50" style="font-size: 28px; font-weight: 600; fill: ${titleColor};">${title}</text>
          
          <!-- Stats row with rounded rectangles and icons -->
          <rect x="20" y="60" width="120" height="24" rx="12" fill="${titleColor}" opacity="0.1"/>
          <path d="M45 56V59.4C45 59.96005 45 60.24008 45.109 60.45399C45.2049 60.64215 45.3578 60.79513 45.546 60.89101C45.7599 61 46.0399 61 46.6 61H50M40 61H36C34.89543 61 34 61.89543 34 63V72C34 73.1046 34.89543 74 36 74H42C43.1046 74 44 73.1046 44 72V69M46 56H43.2C42.0799 56 41.5198 56 41.092 56.21799C40.7157 56.40973 40.4097 56.71569 40.218 57.09202C40 57.51984 40 58.0799 40 59.2V65.8C40 66.9201 40 67.4802 40.218 67.908C40.4097 68.2843 40.7157 68.5903 41.092 68.782C41.5198 69 42.0799 69 43.2 69H46.8C47.9201 69 48.4802 69 48.908 68.782C49.2843 68.5903 49.5903 68.2843 49.782 67.908C50 67.4802 50 66.9201 50 65.8V60L46 56Z" 
            stroke="${textColor}" 
            stroke-width="1.5" 
            stroke-linejoin="round"
            transform="scale(0.8) translate(8, 24)"
          />
          <text x="55" y="77" style="font-size: 14px; fill: ${textColor}; font-weight: 500;">
            ${beautifyNumberString(numFiles)} Files
          </text>

          <rect x="150" y="60" width="120" height="24" rx="12" fill="${titleColor}" opacity="0.1"/>
          <path d="M173 56L181 56.00048M173 62L181 62.0005M173 68L181 68.0005M166 54V70M166 54L163 57M166 54L169 57M166 70L163 67M166 70L169 67" 
            stroke="${textColor}" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            transform="scale(0.8) translate(40, 28)"
          />
          <text x="185" y="77" style="font-size: 14px; fill: ${textColor}; font-weight: 500;">
            ${beautifyNumberString(totalLines)} Lines
          </text>

          <rect x="280" y="60" width="120" height="24" rx="12" fill="${titleColor}" opacity="0.1"/>
          <path d="M297 65L301 69M301 65L297 69M293 51H288.2C287.0799 51 286.51984 51 286.09202 51.21799C285.71569 51.40973 285.40973 51.71569 285.21799 52.09202C285 52.51984 285 53.0799 285 54.2V65.8C285 66.9201 285 67.4802 285.21799 67.908C285.40973 68.2843 285.71569 68.5903 286.09202 68.782C286.51984 69 287.0799 69 288.2 69H293M293 51L299 57M293 51V55.4C293 55.96005 293 56.24008 293.109 56.45399C293.2049 56.64215 293.3578 56.79513 293.546 56.89101C293.7599 57 294.0399 57 294.6 57H299M299 57V62" 
            stroke="${textColor}" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            transform="scale(0.8) translate(80, 30)"
          />
          <text x="315" y="77" style="font-size: 14px; fill: ${textColor}; font-weight: 500;">
            ${beautifyNumberString(numErrors)} Hidden
          </text>

          <!-- Table headers -->
          <text x="20" y="110" style="font-size: 14px; font-weight: 600; fill: ${titleColor};">Languages</text>
          <text x="120" y="110" style="font-size: 14px; font-weight: 600; fill: ${titleColor};">Lines</text>
          <text x="200" y="110" style="font-size: 14px; font-weight: 600; fill: ${titleColor};">Files</text>

          <!-- Table rows with alternating opacity -->
          ${extensions.map((ext, index) => `
            <rect x="15" y="${115 + (index * 20)}" width="400" height="20" fill="${titleColor}" opacity="${index % 2 === 0 ? 0.03 : 0.06}"/>
            <text x="20" y="${130 + (index * 20)}" style="font-size: 13px; fill: ${textColor}; font-weight: 500;">.${ext}</text>
            <text x="120" y="${130 + (index * 20)}" style="font-size: 13px; fill: ${textColor}; font-weight: 500;">${beautifyNumberString(lineCounterPerFile[index])}</text>
            <text x="200" y="${130 + (index * 20)}" style="font-size: 13px; fill: ${textColor}; font-weight: 500;">${beautifyNumberString(fileCounter[index])}</text>
          `).join("")}
        </g>
      </svg>
    `;
  }