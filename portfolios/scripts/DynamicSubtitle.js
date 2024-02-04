// DynamicSubtitle.js
const currentDirectory = window.location.pathname.split('/').filter(Boolean).pop();
const formattedH2Text = currentDirectory.replace(/-/g, ' ').replace(/%20/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Convert to title case
document.getElementById('dynamic-subtitle').textContent = formattedH2Text;