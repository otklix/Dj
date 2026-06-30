const terminalLogic = {
    history: [],
    execute: function(cmd) {
        const parts = cmd.split(' ');
        const command = parts[0].toLowerCase();
        
        switch(command) {
            case 'help': return "Available: ls, cd, pwd, clear, whoami, uname, date";
            case 'ls': return Object.keys(FS).join('  ');
            case 'pwd': return "/var/mobile/home";
            case 'whoami': return "mobile";
            case 'uname': return "Darwin Kernel Version 23.6.0: iOS 18.7";
            case 'date': return new Date().toString();
            case 'clear': return "CLEAR_SIGNAL";
            default: return `sh: command not found: ${command}`;
        }
    }
};