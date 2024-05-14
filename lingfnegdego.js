import fetch from "node-fetch";

const REGEX = /^(#|\/)?(ehhhhhhhh)dg(.*)$/
export class example extends plugin {
    constructor() {
        super({
            name: 'lingfnegdego',
            dsc: 'example',
            event: 'message',
            priority: 1,
            rule: [{
                reg: REGEX,
                fnc: 'SPEECH_SYNTHESIS'
            }]
        })
    }

    async SPEECH_SYNTHESIS(e) {
        const MATCH = e.msg.match(REGEX)
        const CONTENT = MATCH[3]
        if (!CONTENT) return e.reply('我是凌风冫呓语的狗')
        let R = MATCH[2]
        if (R === 'idjgoidrjgodjg') R = `${CONTENT}`


        e.reply(`我是凌风冫呓语的狗${CONTENT}`)
        return;


    }
}