document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    const scriptContent = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/thanhdat4461/BaconScripter-Hub/main/LOADSTRING", true))()';

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(scriptContent).then(() => {
            alert('Script copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable text selection
    document.addEventListener('selectstart', event => event.preventDefault());
});
