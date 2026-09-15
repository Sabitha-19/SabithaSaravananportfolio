import React from 'react';

export const RESUME_PDF_PATH = '/assets/resume/Sabitha-Saravanan-Resume.pdf';
export const RESUME_FILE_NAME = 'Sabitha-Saravanan-Resume.pdf';

/**
 * Downloads the actual existing resume PDF as Sabitha-Saravanan-Resume.pdf
 */
export const handleDownloadResume = async (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  try {
    const response = await fetch(RESUME_PDF_PATH);
    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.statusText}`);
    }
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = objectUrl;
    link.download = RESUME_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(objectUrl);
      document.body.removeChild(link);
    }, 200);
  } catch {
    // Fallback direct download
    const fallbackLink = document.createElement('a');
    fallbackLink.href = RESUME_PDF_PATH;
    fallbackLink.download = RESUME_FILE_NAME;
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
};
