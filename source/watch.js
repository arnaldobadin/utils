const Watch = {};

Watch.COLOR = {
    RESET : "\x1b[0m", BRIGHT : "\x1b[1m", DIM : "\x1b[2m", UNDERSCORE : "\x1b[4m",
    BLINK : "\x1b[5m", REVERSE : "\x1b[7m", HIDDEN : "\x1b[8m",

    FGBLACK : "\x1b[30m", FGRED : "\x1b[31m", FGGREEN : "\x1b[32m", FGYELLOW : "\x1b[33m",
    FGBLUE : "\x1b[34m", FGMAGENTA : "\x1b[35m", FGCYAN : "\x1b[36m", FGWHITE : "\x1b[37m",

    BGBLACK : "\x1b[40m", BGRED : "\x1b[41m", BGGREEN : "\x1b[42m", BGYELLOW : "\x1b[43m",
    BGBLUE : "\x1b[44m", BGMAGENTA : "\x1b[45m", BGCYAN : "\x1b[46m", BGWHITE : "\x1b[47m"
};

Watch.TYPE = {
	INFO : {SYMBOL : "^", COLOR : Watch.COLOR.FGWHITE},
	WARNING : {SYMBOL : "!", COLOR : Watch.COLOR.FGYELLOW},
	EVENT : {SYMBOL : "#", COLOR : Watch.COLOR.FGYELLOW},
	DEBUG : {SYMBOL : "$", COLOR : Watch.COLOR.FGRED},
	IN : {SYMBOL : ">", COLOR : Watch.COLOR.FGCYAN},
	OUT : {SYMBOL : "<", COLOR : Watch.COLOR.FGMAGENTA},
	ERROR : {SYMBOL : "*", COLOR : Watch.COLOR.FGRED, WRITE : true},
	FAIL : {SYMBOL : "-", COLOR : Watch.COLOR.FGRED},
	SUCCESS : {SYMBOL : "+", COLOR : Watch.COLOR.FGGREEN},
	LOG : {SYMBOL : "x", COLOR : Watch.COLOR.FGWHITE}
};

Watch.name = function(name) {
    if (!(name != null && typeof(name) == "string" && name.length)) {
        return false;
    }
    return Watch.NAME = name;
}

Watch.output = function(output) {
    if (!(name != null && typeof(name) == "function")) {
        return false;
    }
    return Watch.OUTPUT = output;
}

for (let index in Watch.TYPE) {
	const type = Watch.TYPE[index];
	if (!type) continue;

	Watch[index.toLowerCase()] = function(message) {
        if (!types.string(message)) return false;
		const now = new Date();
        const log = `${type.COLOR}[${type.SYMBOL}] ${message} ${Watch.COLOR.RESET}`

        if (type.WRITE && types.string(Watch.NAME) && types.function(Watch.OUTPUT)) {
            Watch.OUTPUT(`[${Watch.NAME}] ${message}`);
        }

        console.log(log);
        return true;
	}
}

module.exports = Watch;
